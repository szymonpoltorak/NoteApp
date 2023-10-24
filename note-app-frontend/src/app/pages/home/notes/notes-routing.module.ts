import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPaths } from "@enums/RouterPaths";
import { NotesComponent } from "./notes.component";

const routes: Routes = [
    {
        path: RouterPaths.CURRENT_PATH,
        component: NotesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotesRoutingModule {
}
