import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    readonly gridItems: number[] = [];

    ngOnInit(): void {
        for (let i = 0; i < 16; i++) {
            this.gridItems[i] = i;
        }
    }
}
