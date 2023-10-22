import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormValidatorService } from "@core/validators/form-validator.service";
import { LoginRequest } from "@core/data/auth/login-request";
import { AuthService } from "@core/services/auth/auth.service";
import { Subject, takeUntil } from "rxjs";
import { AuthResponse } from "@core/data/auth/auth-response";
import { AuthConstants } from "@enums/auth/AuthConstants";
import { StorageKeys } from "@enums/auth/StorageKeys";
import { UtilService } from "@core/services/utils/util.service";
import { UserService } from "@core/services/utils/user.service";
import { RouterPaths } from "@enums/RouterPaths";
import { FormFieldNames } from "@enums/auth/FormFieldNames";
import { environment } from "@environments/environment";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm !: FormGroup;
    private loginDestroy$: Subject<any> = new Subject<any>();

    constructor(public loginValidatorService: FormValidatorService,
                private authService: AuthService,
                private utilService: UtilService,
                private userService: UserService,
                private iconRegistry: MatIconRegistry,
                private sanitizer: DomSanitizer) {
        this.iconRegistry.addSvgIcon(
            'google',
            this.sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons8-google-logo.svg')
        );
        this.iconRegistry.addSvgIcon(
            'github',
            this.sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons8-github.svg')
        );
    }

    ngOnInit(): void {
        this.loginForm = this.loginValidatorService.buildFormGroup();
        this.registerSvgIcon();
    }

    private registerSvgIcon(): void {
    }

    submitForm(): void {
        if (this.loginForm.invalid) {
            return;
        }
        const request: LoginRequest = this.buildLoginRequest();

        console.log(request);

        this.authService.loginUser(request)
            .pipe(takeUntil(this.loginDestroy$))
            .subscribe((data: AuthResponse): void => {
                if (data.authToken === AuthConstants.NO_TOKEN) {
                    return;
                }
                const username: string = this.loginForm.get(FormFieldNames.EMAIL_FIELD)?.value;

                this.userService.setUserAuthentication = true;

                this.authService.saveData(data);

                this.utilService.addValueToStorage(StorageKeys.USERNAME, username);
                this.utilService.navigate(RouterPaths.HOME_LOGIN_PATH);
            });
    }

    redirectToGoogleOauth(): void {
        // window.location.href = `${environment.httpBackend}/oauth2/authorization/google`;
    }

    redirectToGithubOauth(): void {
        // window.location.href = `${environment.httpBackend}/oauth2/authorization/github`;
    }

    private buildLoginRequest(): LoginRequest {
        const loginRequest: LoginRequest = new LoginRequest();

        loginRequest.username = this.loginForm.get(FormFieldNames.EMAIL_FIELD)!.value;
        loginRequest.password = this.loginForm.get(FormFieldNames.LOGIN_PASSWORD)!.value;

        return loginRequest;
    }
}
