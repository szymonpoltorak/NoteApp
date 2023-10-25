import { Injectable } from '@angular/core';
import { Note } from "@core/data/home/note";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EditNoteService {
    constructor(private httpClient: HttpClient) {
    }

    private _noteToEdit: Note = {title: "", description: "", noteId: -1, dateOfCreation: new Date(), noteLang: "TEXT"};

    get noteToEdit() {
        return this._noteToEdit;
    }

    set noteToEdit(note: Note) {
        this._noteToEdit = note;
    }

    updateNote(noteToEdit: Note): Observable<Note> {
        return this.httpClient.patch<Note>(`${environment.httpBackend}/api/home/notes/updateNote`, noteToEdit);
    }
}
