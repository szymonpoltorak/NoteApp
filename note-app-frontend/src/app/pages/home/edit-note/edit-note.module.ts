import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditNoteRoutingModule } from './edit-note-routing.module';
import { EditNoteComponent } from "./edit-note.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";


@NgModule({
    declarations: [
        EditNoteComponent
    ],
    imports: [
        CommonModule,
        EditNoteRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ]
})
export class EditNoteModule {
}
