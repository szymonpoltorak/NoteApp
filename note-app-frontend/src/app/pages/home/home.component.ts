import { Component, OnInit } from '@angular/core';
import { Note } from "@core/data/note";
import { HomeViews } from "@enums/home/HomeViews";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    readonly notes: Note[] = []
    protected readonly HomeViews = HomeViews;
    currentView: HomeViews = HomeViews.NOTES;

    ngOnInit(): void {
        for (let i = 0; i < 16; i++) {
            this.notes.push({
                title: `Notes ${i + 1}`,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
                noteId: i + 1
            });
        }
    }

    changeToHomeView(): void {
        if (this.currentView !== HomeViews.NOTES) {
            this.currentView = HomeViews.NOTES;
        }
    }

    changeToProfileView(): void {
        if (this.currentView !== HomeViews.PROFILE) {
            this.currentView = HomeViews.PROFILE;
        }
    }
}
