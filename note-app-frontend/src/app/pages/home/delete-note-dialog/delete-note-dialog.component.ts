import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-delete-note-dialog',
    templateUrl: './delete-note-dialog.component.html',
    styleUrls: ['./delete-note-dialog.component.scss']
})
export class DeleteNoteDialogComponent {
    constructor(public dialogRef: MatDialogRef<DeleteNoteDialogComponent>) {
    }
}
