import { Injectable } from '@angular/core';
import { SideMenuActions } from "@core/interfaces/home/SideMenuActions";
import { Note } from "@core/data/home/note";
import { UtilService } from "@core/services/utils/util.service";
import { RouterPaths } from "@enums/RouterPaths";

@Injectable({
    providedIn: 'root'
})
export class SideMenuService implements SideMenuActions {
    constructor(private utilService: UtilService) {
    }

    changeToCreateNoteView(): void {
        this.utilService.navigate(RouterPaths.CREATE_DIRECT_NOTE);
    }

    changeToNotesView(): void {
        this.utilService.navigate(RouterPaths.NOTES_DIRECT_PATH);
    }

    changeToProfileView(): void {
        this.utilService.navigate(RouterPaths.PROFILE_DIRECT_PATH);
    }

    changeToEditNote(event: Note): void {
        this.utilService.navigate(RouterPaths.EDIT_DIRECT_NOTE);
    }

    logoutUser(): void {
        this.utilService.clearStorage();

        this.utilService.navigate(RouterPaths.LOGIN_DIRECT);
    }
}
