import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPaths } from "@enums/RouterPaths";
import { CreateNoteComponent } from "./create-note.component";

const routes: Routes = [
    {
        path: RouterPaths.CURRENT_PATH,
        component: CreateNoteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateNoteRoutingModule {
}
