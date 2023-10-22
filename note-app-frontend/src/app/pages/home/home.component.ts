import { Component, OnInit } from '@angular/core';
import { HomeViews } from "@enums/home/HomeViews";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    protected readonly HomeViews = HomeViews;
    protected currentView: HomeViews = HomeViews.CREATE_NOTE;

    ngOnInit(): void {
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

    changeToCreateNoteView(): void {
        if (this.currentView !== HomeViews.CREATE_NOTE) {
            this.currentView = HomeViews.CREATE_NOTE;
        }
    }
}
