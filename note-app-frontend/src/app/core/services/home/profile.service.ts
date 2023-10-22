import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "@core/data/home/user";
import { environment } from "@environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor(private httpClient: HttpClient) {
    }

    getUserData(): Observable<User> {
        return this.httpClient.get<User>(`${ environment.httpBackend }/api/home/profile/userData`, {});
    }

    closeAccount(): Observable<User> {
        return this.httpClient.delete<User>(`${ environment.httpBackend }/api/home/profile/closeAccount`);
    }
}
