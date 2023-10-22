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
import { MatSidenavModule } from "@angular/material/sidenav";
import { NotesComponent } from './notes/notes.component';
import { ProfileComponent } from './profile/profile.component';
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { CreateNoteComponent } from './create-note/create-note.component';


@NgModule({
    declarations: [
        NoteComponent,
        HomeComponent,
        DeleteNoteDialogComponent,
        NotesComponent,
        ProfileComponent,
        CreateNoteComponent
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
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        FormsModule,
    ]
})
export class HomeModule {
}
