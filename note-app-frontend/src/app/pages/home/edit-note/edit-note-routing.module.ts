import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPaths } from "@enums/RouterPaths";
import { EditNoteComponent } from "./edit-note.component";

const routes: Routes = [
    {
        path: RouterPaths.CURRENT_PATH,
        component: EditNoteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditNoteRoutingModule {
}
