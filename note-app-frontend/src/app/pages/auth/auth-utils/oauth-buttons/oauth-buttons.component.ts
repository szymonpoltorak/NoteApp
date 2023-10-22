import { Component } from '@angular/core';
import { environment } from "@environments/environment";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'app-oauth-buttons',
    templateUrl: './oauth-buttons.component.html',
    styleUrls: ['./oauth-buttons.component.scss']
})
export class OauthButtonsComponent {
    constructor(private iconRegistry: MatIconRegistry,
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

    redirectToGoogleOauth(): void {
        window.location.href = `${environment.httpBackend}/oauth2/authorization/google`;
    }

    redirectToGithubOauth(): void {
        window.location.href = `${environment.httpBackend}/oauth2/authorization/github`;
    }
}
