import { Injectable } from '@angular/core';
import { Note } from "@core/data/home/note";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class EditNoteService {
    private _noteToEdit: Note = {title: "", description: "", noteId: -1, dateOfCreation: new Date(), noteLang: "TEXT"};

    get noteToEdit() {
        return this._noteToEdit;
    }

    set noteToEdit(note: Note) {
        this._noteToEdit = note;
    }
}
