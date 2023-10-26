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
    @Output() readonly deleteEvent: EventEmitter<Note> = new EventEmitter<Note>();
    protected visibleTitle: string = "";
    protected visibleDescription: string = "";
    private readonly MAX_DESCRIPTION_LENGTH: number = 230;
    private readonly MAX_TITLE_LENGTH: number = 35;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
        if (this.note.description.length > this.MAX_DESCRIPTION_LENGTH) {
            this.visibleDescription = `${this.note.description.substring(0, this.MAX_DESCRIPTION_LENGTH)}...`
        } else {
            this.visibleDescription = this.note.description;
        }

        if (this.note.title.length > this.MAX_TITLE_LENGTH) {
            this.visibleTitle = `${this.note.title.substring(0, this.MAX_TITLE_LENGTH)}...`;
        } else {
            this.visibleTitle = this.note.title;
        }
    }

    openDeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        const dialogRef = this.dialog.open(DeleteNoteDialogComponent, {
            width: '400px',
            enterAnimationDuration,
            exitAnimationDuration,
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === true) {
                console.log("Deleting note!");

                this.deleteEvent.emit(this.note);
            }
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
