import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NoteComponent } from './note/note.component';
import { HomeComponent } from "./home.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { DeleteNoteDialogComponent } from './delete-note-dialog/delete-note-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
    declarations: [
        NoteComponent,
        HomeComponent,
        DeleteNoteDialogComponent
    ],
    exports: [
        NoteComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatGridListModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatPaginatorModule,
        MatCardModule,
        MatDividerModule,
        MatDialogModule,
    ]
})
export class HomeModule {
}
