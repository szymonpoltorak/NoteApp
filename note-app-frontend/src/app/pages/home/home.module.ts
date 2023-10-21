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


@NgModule({
    declarations: [
        NoteComponent,
        HomeComponent
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
    ]
})
export class HomeModule {
}
