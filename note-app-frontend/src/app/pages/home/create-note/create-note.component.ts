import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NoteRequest } from "@core/data/home/note-request";

@Component({
    selector: 'app-create-note',
    templateUrl: './create-note.component.html',
    styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
    private readonly MIN_LENGTH: number = 2;
    private readonly TITLE_MAX_LENGTH: number = 30;
    private readonly CONTENT_MAX_LENGTH: number = 30;

    readonly titleControl: FormControl = new FormControl("",
        [
            Validators.required,
            Validators.minLength(this.MIN_LENGTH),
            Validators.maxLength(this.TITLE_MAX_LENGTH)
        ]
    );

    readonly contentControl: FormControl = new FormControl("",
        [
            Validators.required,
            Validators.minLength(this.MIN_LENGTH),
            Validators.maxLength(this.CONTENT_MAX_LENGTH)
        ]
    );
    protected noteGroup !: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    addNewNote(): void {
        if (this.noteGroup.invalid) {
            return;
        }
        const noteRequest: NoteRequest = {
            title: this.titleControl.value,
            content: this.contentControl.value,
            noteLang: "TEXT"
        };
        console.log(noteRequest);
    }

    ngOnInit(): void {
        this.noteGroup = this.formBuilder.group({
            title: this.titleControl,
            content: this.contentControl
        });
    }
}
