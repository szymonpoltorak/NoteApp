import { Component, OnInit } from '@angular/core';
import { HomeViews } from "@enums/home/HomeViews";
import { ProfileService } from "@core/services/home/profile.service";
import { AuthService } from "@core/services/auth/auth.service";
import { UtilService } from "@core/services/utils/util.service";
import { RouterPaths } from "@enums/RouterPaths";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    protected readonly HomeViews = HomeViews;
    protected currentView: HomeViews = HomeViews.CREATE_NOTE;

    constructor(private authService: AuthService,
                private utilService: UtilService) {
    }

    ngOnInit(): void {
    }

    changeToHomeView(): void {
        if (this.currentView !== HomeViews.NOTES) {
            this.currentView = HomeViews.NOTES;
        }
    }

    changeToProfileView(): void {
        if (this.currentView !== HomeViews.PROFILE) {
            this.currentView = HomeViews.PROFILE;
        }
    }

    changeToCreateNoteView(): void {
        if (this.currentView !== HomeViews.CREATE_NOTE) {
            this.currentView = HomeViews.CREATE_NOTE;
        }
    }

    logoutUser(): void {
        this.authService.logoutUser().subscribe(data => {
            console.log(data);

            this.utilService.clearStorage();

            this.utilService.navigate(RouterPaths.LOGIN_DIRECT);
        })
    }
}
