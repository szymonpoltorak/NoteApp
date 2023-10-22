import { Component, Input } from '@angular/core';
import { Note } from "@core/data/home/note";

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent {
    @Input() editNote: Note = {title: "", description: "", noteId: -1, dateOfCreation: new Date(), noteLang: "TEXT"};

}
