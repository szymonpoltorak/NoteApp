import { Component, OnInit } from '@angular/core';
import { User } from "@core/data/home/user";
import { ProfileService } from "@core/services/home/profile.service";
import { UtilService } from "@core/services/utils/util.service";
import { RouterPaths } from "@enums/RouterPaths";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    user: User = {name: "", surname: "", username: ""};

    constructor(private profileService: ProfileService,
                private utilService: UtilService) {
    }

    ngOnInit(): void {
        this.profileService.getUserData().subscribe((data: User): void => {
            console.log(data);

            this.user = data;
        });
    }

    closeAccount(): void {
        this.profileService.closeAccount().subscribe((): void => {
            this.utilService.clearStorage();

            this.utilService.navigate(RouterPaths.LOGIN_DIRECT);
        });
    }
}
