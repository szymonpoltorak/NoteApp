import { Note } from "@core/data/home/note";

export interface SideMenuActions {
    changeToHomeView(): void;

    changeToProfileView(): void;

    changeToCreateNoteView(): void;

    logoutUser(): void;

    loadEditNoteView(event: Note): void;
}
