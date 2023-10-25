import { Component, OnInit } from '@angular/core';
import { Note } from "@core/data/home/note";
import { SideMenuActions } from "@core/interfaces/home/SideMenuActions";
import { SideMenuService } from "@core/services/home/side-menu.service";
import { EditNoteService } from "@core/services/home/edit-note.service";
import { NotesService } from "@core/services/home/notes.service";

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
        for (let i: number = 0; i < 20; i++) {
            this.notes.push({
                title: `Notes ${i + 1}`,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
                noteId: i + 1,
                dateOfCreation: new Date(),
                noteLang: "TEXT"
            });
        }
        // this.notesService.getNotesList(0)
        //     .subscribe((notes: Note[]): void => {
        //        console.log(notes);
        //
        //        this.notes = notes;
        //
        //        console.log(this.notes);
        //     });
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
}
