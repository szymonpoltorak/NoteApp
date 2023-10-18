import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from "@core/services/utils/user.service";
import { RouterPaths } from "@enums/RouterPaths";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor(private userService: UserService,
                private router: Router) {
    }

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!this.userService.isUserAuthenticated) {
            return this.router.createUrlTree([RouterPaths.LOGIN_DIRECT]);
        }
        return true;
    }
}
