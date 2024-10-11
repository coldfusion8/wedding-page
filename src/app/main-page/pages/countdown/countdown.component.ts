import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-countdown',
    templateUrl: './countdown.component.html',
    styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit {
    protected date = 0;

    ngOnInit(): void {
        const currentDate = new Date();
        const weddingDate = new Date(2025, 7, 2);
        this.date = this.getDayDifference(weddingDate, currentDate);
    }

    private getDayDifference(date1: Date, date2: Date): number {
        const oneDay = 1000 * 60 * 60 * 24;
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        return Math.ceil(timeDiff / oneDay);
    }
}
