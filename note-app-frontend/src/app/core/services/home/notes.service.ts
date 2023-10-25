import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Note } from "@core/data/home/note";
import { environment } from "@environments/environment";

@Injectable({
    providedIn: 'root'
})
export class NotesService {
    constructor(private httpClient: HttpClient) {
    }

    getNotesList(pageNumber: number): Observable<Note[]> {
        return this.httpClient.get<Note[]>(`${environment.httpBackend}/api/home/notes/getNotes`, {
            params: {
                pageNumber: pageNumber
            }
        });
    }
}
