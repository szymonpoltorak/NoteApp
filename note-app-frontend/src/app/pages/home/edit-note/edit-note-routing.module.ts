import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPaths } from "@enums/RouterPaths";
import { EditNoteComponent } from "./edit-note.component";
import { AuthGuard } from "@core/guards/auth.guard";
import { EditNoteGuard } from "@core/guards/edit-note.guard";

const routes: Routes = [
    {
        path: RouterPaths.CURRENT_PATH,
        component: EditNoteComponent,
        canActivate: [AuthGuard, EditNoteGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditNoteRoutingModule {
}
