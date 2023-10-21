import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPaths } from "@enums/RouterPaths";
import { HomeComponent } from "./home.component";
import { AuthGuard } from "@core/guards/auth.guard";

const routes: Routes = [
    {
        path: RouterPaths.CURRENT_PATH,
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
