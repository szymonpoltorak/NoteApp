import { Component, OnInit } from '@angular/core';
import { Note } from "@core/data/home/note";
import { SideMenuActions } from "@core/interfaces/home/SideMenuActions";
import { SideMenuService } from "@core/services/home/side-menu.service";
import { EditNoteService } from "@core/services/home/edit-note.service";
import { NotesService } from "@core/services/home/notes.service";
import { PageEvent } from "@angular/material/paginator";

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, SideMenuActions {
    protected notes: Note[] = [];

    constructor(private sideMenuService: SideMenuService,
                private editNoteService: EditNoteService,
                private notesService: NotesService) {
    }

    ngOnInit(): void {
        this.notesService.getNotesList(0)
            .subscribe((notes: Note[]): void => {
               this.notes = notes;

               console.log(this.notes);
            });
    }

    changeToCreateNoteView(): void {
        this.sideMenuService.changeToCreateNoteView();
    }

    changeToNotesView(): void {
        this.sideMenuService.changeToNotesView();
    }

    changeToProfileView(): void {
        this.sideMenuService.changeToProfileView();
    }

    changeToEditNote(event: Note): void {
        this.editNoteService.noteToEdit = event;

        this.sideMenuService.changeToEditNote(event);
    }

    logoutUser(): void {
        this.sideMenuService.logoutUser();
    }

    changePage(event: PageEvent): void {
        this.notesService.getNotesList(event.pageIndex)
            .subscribe((notes: Note[]): void => {
               this.notes = notes;

               console.log(this.notes);
            });
    }
}
