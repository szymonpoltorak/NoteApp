import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from "./notes.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import { NoteComponent } from "./note/note.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import { DeleteNoteDialogComponent } from "./delete-note-dialog/delete-note-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
    declarations: [
        NotesComponent,
        NoteComponent,
        DeleteNoteDialogComponent
    ],
    imports: [
        CommonModule,
        NotesRoutingModule,
        MatSidenavModule,
        MatDividerModule,
        MatIconModule,
        MatToolbarModule,
        MatGridListModule,
        MatPaginatorModule,
        MatButtonModule,
        MatDialogModule
    ]
})
export class NotesModule {
}
