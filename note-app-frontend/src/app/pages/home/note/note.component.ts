import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
    @Input() noteId: number = 0;
    @Input() title: string = "";
    @Input() description: string = "";

    ngOnInit(): void {
        if (this.description.length > 250) {
            this.description = `${this.description.substring(0, 250)}...`
        }
        if (this.title.length > 35) {
            this.title = `${this.title.substring(0, 35)}...`;
        }
    }
}
