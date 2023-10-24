import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditNoteService } from "@core/services/home/edit-note.service";
import { UtilService } from "@core/services/utils/util.service";
import { RouterPaths } from "@enums/RouterPaths";

@Injectable({
    providedIn: 'root'
})
export class EditNoteGuard {
    constructor(private editNoteService: EditNoteService,
                private utilService: UtilService) {
    }

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.editNoteService.noteToEdit.title === "") {
            this.utilService.navigate(RouterPaths.NOTES_DIRECT_PATH);
        }
        return true;
    }
}
