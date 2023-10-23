import { Component, OnInit } from '@angular/core';
import { User } from "@core/data/home/user";
import { ProfileService } from "@core/services/home/profile.service";
import { UtilService } from "@core/services/utils/util.service";
import { RouterPaths } from "@enums/RouterPaths";
import { SideMenuActions } from "@core/interfaces/home/SideMenuActions";
import { Note } from "@core/data/home/note";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, SideMenuActions {
    user: User = {name: "", surname: "", username: ""};

    constructor(private profileService: ProfileService,
                private utilService: UtilService) {
    }

    ngOnInit(): void {
        this.profileService.getUserData().subscribe((data: User): void => {
            this.user = data;
        });
    }

    closeAccount(): void {
        this.profileService.closeAccount().subscribe((): void => {
            this.utilService.clearStorage();

            this.utilService.navigate(RouterPaths.LOGIN_DIRECT);
        });
    }

    changeToCreateNoteView(): void {
    }

    changeToHomeView(): void {
    }

    changeToProfileView(): void {
    }

    loadEditNoteView(event: Note): void {
    }

    logoutUser(): void {
    }
}
