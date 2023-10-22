import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { EmailFieldComponent } from './email-field/email-field.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NameFieldComponent } from './name-field/name-field.component';
import { OauthButtonsComponent } from './oauth-buttons/oauth-buttons.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
    declarations: [
        PasswordFieldComponent,
        EmailFieldComponent,
        NameFieldComponent,
        OauthButtonsComponent
    ],
    exports: [
        EmailFieldComponent,
        PasswordFieldComponent,
        NameFieldComponent,
        OauthButtonsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class AuthUtilsModule {
}
