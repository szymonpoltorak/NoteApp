import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPaths } from "@enums/RouterPaths";
import { AuthGuard } from "@core/guards/auth.guard";
import { EditNoteGuard } from "@core/guards/edit-note.guard";

const routes: Routes = [
    {
        path: RouterPaths.CURRENT_PATH,
        redirectTo: RouterPaths.NOTES_PATH,
        pathMatch: "full"
    },
    {
        path: RouterPaths.NOTES_PATH,
        loadChildren: () => import("./notes/notes.module")
            .then(module => module.NotesModule),
        canActivate: [AuthGuard]
    },
    {
        path: RouterPaths.PROFILE_PATH,
        loadChildren: () => import("./profile/profile.module")
            .then(module => module.ProfileModule),
        canActivate: [AuthGuard]
    },
    {
        path: RouterPaths.CREATE_NOTE,
        loadChildren: () => import("./create-note/create-note.module")
            .then(module => module.CreateNoteModule),
        canActivate: [AuthGuard]
    },
    {
        path: RouterPaths.EDIT_NOTE,
        loadChildren: () => import("./edit-note/edit-note.module")
            .then(module => module.EditNoteModule),
        canActivate: [AuthGuard, EditNoteGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
