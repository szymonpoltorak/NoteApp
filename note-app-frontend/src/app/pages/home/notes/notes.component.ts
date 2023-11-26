import { Component, OnInit } from '@angular/core';
import { Note } from "@core/data/home/note";
import { SideMenuActions } from "@core/interfaces/home/SideMenuActions";
import { SideMenuService } from "@core/services/home/side-menu.service";
import { EditNoteService } from "@core/services/home/edit-note.service";
import { NotesService } from "@core/services/home/notes.service";
import { PageEvent } from "@angular/material/paginator";
import { map, Observable } from "rxjs";

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, SideMenuActions {
    protected notes$ !: Observable<Note[]>;
    protected numOfColumns: number = 4;

    constructor(private sideMenuService: SideMenuService,
                private editNoteService: EditNoteService,
                private notesService: NotesService) {
    }

    ngOnInit(): void {
        this.notes$ = this.notesService.getNotesList(0);

        window.onresize = () => {
            if (window.innerWidth < 602) {
                this.numOfColumns = 1;
            }
            else if (window.innerWidth < 886) {
                this.numOfColumns = 2;
            } else if (window.innerWidth < 1180) {
                this.numOfColumns = 3;
            } else {
                this.numOfColumns = 4;
            }
        };
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
        this.notes$ = this.notesService.getNotesList(event.pageIndex);
    }

    removeNote(event: Note): void {
        this.notesService.deleteNote(event.noteId)
            .subscribe(() => this.notes$ = this.notes$.pipe(
                map((notes: Note[]) => notes.filter((note: Note) => note !== event)))
            );
    }
}
