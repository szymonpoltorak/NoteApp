import { Component, Input, OnInit } from '@angular/core';
import { Note } from "@core/data/home/note";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { SideMenuActions } from "@core/interfaces/home/SideMenuActions";
import { SideMenuService } from "@core/services/home/side-menu.service";
import { EditNoteService } from "@core/services/home/edit-note.service";

@Component({
    selector: 'app-edit-note',
    templateUrl: './edit-note.component.html',
    styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit, SideMenuActions {
    editNote: Note = {title: "", description: "", noteId: -1, dateOfCreation: new Date(), noteLang: "TEXT"};
    protected noteGroup !: FormGroup;
    private readonly MIN_LENGTH: number = 2;
    private readonly TITLE_MAX_LENGTH: number = 30;
    readonly titleControl: FormControl = new FormControl("",
        [
            Validators.required,
            Validators.minLength(this.MIN_LENGTH),
            Validators.maxLength(this.TITLE_MAX_LENGTH)
        ]
    );
    private readonly CONTENT_MAX_LENGTH: number = 30;
    readonly contentControl: FormControl = new FormControl("",
        [
            Validators.required,
            Validators.minLength(this.MIN_LENGTH),
            Validators.maxLength(this.CONTENT_MAX_LENGTH)
        ]
    );

    constructor(private formBuilder: FormBuilder,
                private sideMenuService: SideMenuService,
                private editNoteService: EditNoteService) {
    }

    submitEditedNote(): void {
        if (this.noteGroup.invalid) {
            return;
        }
        const note: Note = {
            title: this.titleControl.value,
            description: this.contentControl.value,
            noteLang: this.editNote.noteLang,
            noteId: this.editNote.noteId,
            dateOfCreation: this.editNote.dateOfCreation
        };
        console.log(note);
    }

    ngOnInit(): void {
        this.noteGroup = this.formBuilder.group({
            title: this.titleControl,
            content: this.contentControl
        });
        this.editNote = this.editNoteService.getNoteToEdit();

        console.log(this.editNote);
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
        this.sideMenuService.changeToEditNote(event);
    }

    logoutUser(): void {
        this.sideMenuService.logoutUser();
    }
}
