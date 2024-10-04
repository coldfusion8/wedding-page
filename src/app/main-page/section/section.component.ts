import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrl: './section.component.scss'
})
export class SectionComponent implements AfterViewInit {
    @ViewChild('wrapper') wrapper?: ElementRef<HTMLDivElement>;

    ngAfterViewInit(): void {
        if (!this.wrapper) {
            return;
        }

        this.sizeWrapper(this.wrapper.nativeElement);
    }

    private sizeWrapper(wrapper: HTMLDivElement): void {
        wrapper.style.width = `${window.innerWidth}px`;
        wrapper.style.height = `${window.innerHeight}px`;
    }
}
