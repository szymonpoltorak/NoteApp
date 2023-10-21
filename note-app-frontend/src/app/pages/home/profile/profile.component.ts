import { Component } from '@angular/core';
import { User } from "@core/data/home/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    user: User = {
        name: "Szymon",
        surname: "Półtorak",
        username: "szymonpotorak@gmail.com"
    }
}
