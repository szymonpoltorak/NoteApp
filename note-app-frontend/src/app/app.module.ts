import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './pages/home/home.component';
import { OAuthComponent } from './pages/oauth/oauth.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AuthInterceptor } from "@core/interceptors/auth.interceptor";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        OAuthComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
