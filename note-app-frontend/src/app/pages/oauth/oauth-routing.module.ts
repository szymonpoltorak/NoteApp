import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OAuthComponent } from "./oauth.component";
import { RouterPaths } from "@enums/RouterPaths";
import { AuthGuard } from "@core/guards/auth.guard";

const routes: Routes = [
    {
        path: RouterPaths.CURRENT_PATH,
        component: OAuthComponent
    },
    {
        path: RouterPaths.HOME_PATH,
        loadChildren: () => import("../home/home.module")
            .then(module => module.HomeModule),
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OAuthRoutingModule {
}
