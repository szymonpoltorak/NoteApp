import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OAuthComponent } from "./oauth.component";
import { RouterPaths } from "@enums/RouterPaths";

const routes: Routes = [
    {
        path: RouterPaths.CURRENT_PATH,
        component: OAuthComponent
    },
    {
        path: RouterPaths.HOME_PATH,
        redirectTo: RouterPaths.HOME_PATH
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OAuthRoutingModule {
}
