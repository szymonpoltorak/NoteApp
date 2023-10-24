import { Note } from "@core/data/home/note";

export interface SideMenuActions {
    changeToNotesView(): void;

    changeToProfileView(): void;

    changeToCreateNoteView(): void;

    logoutUser(): void;

    changeToEditNote(event: Note): void;
}
