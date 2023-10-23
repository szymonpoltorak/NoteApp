import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from "@core/data/home/note";
import { SideMenuActions } from "@core/interfaces/home/SideMenuActions";

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, SideMenuActions {
    @Output() readonly editEvent: EventEmitter<Note> = new EventEmitter<Note>();
    protected readonly notes: Note[] = [];

    ngOnInit(): void {
        for (let i: number = 0; i < 16; i++) {
            this.notes.push({
                title: `Notes ${i + 1}`,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
                noteId: i + 1,
                dateOfCreation: new Date(),
                noteLang: "TEXT"
            });
        }
    }

    propagateEditEvent(event: Note): void {
        this.editEvent.emit(event);
    }

    changeToCreateNoteView(): void {
    }

    changeToHomeView(): void {
    }

    changeToProfileView(): void {
    }

    loadEditNoteView(event: Note): void {
    }

    logoutUser(): void {
    }
}
