import { Component, OnInit } from '@angular/core';
import { HomeViews } from "@enums/home/HomeViews";
import { AuthService } from "@core/services/auth/auth.service";
import { UtilService } from "@core/services/utils/util.service";
import { RouterPaths } from "@enums/RouterPaths";
import { Note } from "@core/data/home/note";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    protected readonly HomeViews = HomeViews;
    protected currentView: HomeViews = HomeViews.NOTES;
    editNote: Note = {title: "", description: "", noteId: -1, dateOfCreation: new Date(), noteLang: "TEXT"};

    constructor(private authService: AuthService,
                private utilService: UtilService) {
    }

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

    logoutUser(): void {
        this.authService.logoutUser().subscribe(data => {
            console.log(data);

            this.utilService.clearStorage();

            this.utilService.navigate(RouterPaths.LOGIN_DIRECT);
        })
    }

    loadEditNoteView(event: Note): void {
        this.currentView = HomeViews.EDIT_NOTE;
        this.editNote = event;
    }
}
