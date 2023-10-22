import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DeleteNoteDialogComponent } from "../delete-note-dialog/delete-note-dialog.component";
import { Note } from "@core/data/home/note";

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
    @Input() note !: Note;
    @Output() readonly editEvent: EventEmitter<Note> = new EventEmitter<Note>();
    private readonly MAX_DESCRIPTION_LENGTH: number = 230;
    private readonly MAX_TITLE_LENGTH: number = 35;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
        if (this.note.description.length > this.MAX_DESCRIPTION_LENGTH) {
            this.note.description = `${this.note.description.substring(0, this.MAX_DESCRIPTION_LENGTH)}...`
        }
        if (this.note.title.length > this.MAX_TITLE_LENGTH) {
            this.note.title = `${this.note.title.substring(0, this.MAX_TITLE_LENGTH)}...`;
        }
    }

    openDeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(DeleteNoteDialogComponent, {
            width: '400px',
            enterAnimationDuration,
            exitAnimationDuration,
        });
    }

    emitEditEvent(): void {
        this.editEvent.emit({
            dateOfCreation: this.note.dateOfCreation,
            noteId: this.note.noteId,
            title: this.note.title,
            description: this.note.description,
            noteLang: "TEXT"
        });
    }
}
