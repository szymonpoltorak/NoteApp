import { Component, OnInit } from '@angular/core';
import { Note } from "@core/data/Note";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    readonly notes: Note[] = [
        {title: "Note 1", description: "Description for Note 1"},
        {title: "Note 2", description: "Description for Note 2"},
        {title: "Note 3", description: "Description for Note 3"},
        {title: "Note 4", description: "Description for Note 4"},
        {title: "Note 5", description: "Description for Note 5"},
        {title: "Note 6", description: "Description for Note 6"},
        {title: "Note 7", description: "Description for Note 7"},
        {title: "Note 8", description: "Description for Note 8"},
        {title: "Note 9", description: "Description for Note 9"},
        {title: "Note 10", description: "Description for Note 10"},
        {title: "Note 11", description: "Description for Note 11"},
        {title: "Note 12", description: "Description for Note 12"},
        {title: "Note 13", description: "Description for Note 13"},
        {title: "Note 14", description: "Description for Note 14"},
        {title: "Note 15", description: "Description for Note 15"},
        {title: "Note 16", description: "Description for Note 16"},
    ];


    ngOnInit(): void {
    }
}
