import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NoteRequest } from "@core/data/home/note-request";
import { SideMenuActions } from "@core/interfaces/home/SideMenuActions";
import { Note } from "@core/data/home/note";
import { SideMenuService } from "@core/services/home/side-menu.service";
import { NotesService } from "@core/services/home/notes.service";
import { UtilService } from "@core/services/utils/util.service";
import { RouterPaths } from "@enums/RouterPaths";
import { Subject, takeUntil } from "rxjs";

@Component({
    selector: 'app-create-note',
    templateUrl: './create-note.component.html',
    styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit, SideMenuActions, OnDestroy {
    protected noteGroup !: FormGroup;
    private destroyCreatNote$: Subject<void> = new Subject<void>();
    private readonly MIN_LENGTH: number = 2;
    private readonly TITLE_MAX_LENGTH: number = 30;
    readonly titleControl: FormControl = new FormControl("",
        [
            Validators.required,
            Validators.minLength(this.MIN_LENGTH),
            Validators.maxLength(this.TITLE_MAX_LENGTH)
        ]
    );
    private readonly CONTENT_MAX_LENGTH: number = 3000;
    readonly contentControl: FormControl = new FormControl("",
        [
            Validators.required,
            Validators.minLength(this.MIN_LENGTH),
            Validators.maxLength(this.CONTENT_MAX_LENGTH)
        ]
    );

    constructor(private formBuilder: FormBuilder,
                private sideMenuService: SideMenuService,
                private notesService: NotesService,
                private utilService: UtilService) {
    }

    addNewNote(): void {
        if (this.noteGroup.invalid) {
            console.log(this.noteGroup.errors);
            return;
        }
        const noteRequest: NoteRequest = {
            title: this.titleControl.value,
            description: this.contentControl.value,
            noteLang: "TEXT"
        };
        console.log(noteRequest);

        this.notesService.createNote(noteRequest)
            .pipe(takeUntil(this.destroyCreatNote$))
            .subscribe((note) => {
                console.log(note);

                this.utilService.navigate(RouterPaths.NOTES_DIRECT_PATH);
            });
    }

    ngOnInit(): void {
        this.noteGroup = this.formBuilder.group({
            title: this.titleControl,
            content: this.contentControl
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
        this.sideMenuService.changeToEditNote(event);
    }

    logoutUser(): void {
        this.sideMenuService.logoutUser();
    }

    ngOnDestroy(): void {
        this.destroyCreatNote$.complete();
    }
}
