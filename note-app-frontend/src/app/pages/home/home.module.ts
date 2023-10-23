import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from "./home.component";
import { OAuthModule } from "../oauth/oauth.module";


@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        HomeRoutingModule,
        OAuthModule
    ]
})
export class HomeModule {
}
