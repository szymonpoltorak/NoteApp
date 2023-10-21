import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DeleteNoteDialogComponent } from "../delete-note-dialog/delete-note-dialog.component";

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
    @Input() noteId: number = 0;
    @Input() title: string = "";
    @Input() description: string = "";
    private readonly MAX_DESCRIPTION_LENGTH: number = 230;
    private readonly MAX_TITLE_LENGTH: number = 35;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
        if (this.description.length > this.MAX_DESCRIPTION_LENGTH) {
            this.description = `${this.description.substring(0, this.MAX_DESCRIPTION_LENGTH)}...`
        }
        if (this.title.length > this.MAX_TITLE_LENGTH) {
            this.title = `${this.title.substring(0, this.MAX_TITLE_LENGTH)}...`;
        }
    }

    openDeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(DeleteNoteDialogComponent, {
            width: '400px',
            enterAnimationDuration,
            exitAnimationDuration,
        });
    }
}
