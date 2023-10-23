import { Injectable } from '@angular/core';
import { Note } from "@core/data/home/note";

@Injectable({
    providedIn: 'root'
})
export class EditNoteService {
    private noteToEdit : Note = {title: "", description: "", noteId: -1, dateOfCreation: new Date(), noteLang: "TEXT"};

    getNoteToEdit(): Note {
        return this.noteToEdit;
    }

    setNoteToEdit(note: Note): void {
        this.noteToEdit = note;
    }
}
