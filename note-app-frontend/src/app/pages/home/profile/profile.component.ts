import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from "@core/data/home/user";
import { ProfileService } from "@core/services/home/profile.service";
import { UtilService } from "@core/services/utils/util.service";
import { RouterPaths } from "@enums/RouterPaths";
import { SideMenuActions } from "@core/interfaces/home/SideMenuActions";
import { Note } from "@core/data/home/note";
import { SideMenuService } from "@core/services/home/side-menu.service";
import { Observable, Subject, takeUntil } from "rxjs";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, SideMenuActions, OnDestroy {
    user$ !: Observable<User>;
    private destroyClosingAccount$: Subject<void> = new Subject<void>();

    constructor(private profileService: ProfileService,
                private utilService: UtilService,
                private sideMenuService: SideMenuService) {
    }

    ngOnInit(): void {
        this.user$ = this.profileService.getUserData();
    }

    closeAccount(): void {
        this.profileService.closeAccount()
            .pipe(takeUntil(this.destroyClosingAccount$))
            .subscribe((): void => {
                this.utilService.clearStorage();

                this.utilService.navigate(RouterPaths.LOGIN_DIRECT);
            });
    }

    changeToCreateNoteView(): void {
        this.sideMenuService.changeToCreateNoteView();
    }

    changeToNotesView(): void {
        this.sideMenuService.changeToNotesView();
    }

    changeToProfileView(): void {
        this.sideMenuService.changeToProfileView();
    }

    changeToEditNote(event: Note): void {
        this.sideMenuService.changeToEditNote(event);
    }

    logoutUser(): void {
        this.sideMenuService.logoutUser();
    }

    ngOnDestroy(): void {
        this.destroyClosingAccount$.complete();
    }
}
