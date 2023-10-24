import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNoteRoutingModule } from './create-note-routing.module';
import { CreateNoteComponent } from "./create-note.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";


@NgModule({
    declarations: [
        CreateNoteComponent
    ],
    imports: [
        CommonModule,
        CreateNoteRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ]
})
export class CreateNoteModule {
}
