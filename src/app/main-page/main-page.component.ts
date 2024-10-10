import { Component, HostListener, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SectionComponent } from './section/section.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit, OnDestroy {
    @ViewChildren(SectionComponent) private sections?: QueryList<SectionComponent>;

    constructor() {
        this.preventMouseWheelScroll = this.preventMouseWheelScroll.bind(this);
        this.preventTouchScroll = this.preventTouchScroll.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
    }

    ngOnInit(): void {
        window.addEventListener('touchmove', this.preventTouchScroll, { passive: false });
        window.addEventListener('wheel', this.preventMouseWheelScroll, { passive: false });
        window.addEventListener('touchstart', this.onTouchStart, { passive: false });
    }

    ngOnDestroy(): void {
        // Cleanup event listeners
        window.removeEventListener('touchmove', this.preventTouchScroll);
        window.removeEventListener('wheel', this.preventMouseWheelScroll);
    }

    onTouchStart(event: TouchEvent): void {
        this.touchStartY = event.touches[0].clientY;
    }

    private scroll(amount: number): void {
        if (!this.sections || this.scrollLock) {
            return;
        }

        this.pageIndex += amount;

        if (this.pageIndex >= this.sections.length) {
            this.pageIndex = this.sections.length - 1;
        }

        if (this.pageIndex < 0) {
            this.pageIndex = 0;
        }

        this.sections.get(this.pageIndex)?.wrapper?.nativeElement.scrollIntoView({ behavior: 'smooth' });
        this.scrollLock = true;

        setTimeout(() => {
            this.scrollLock = false;
        }, 250);
    }

    @HostListener('window:keydown', ['$event'])
    private preventScrollKeys(event: KeyboardEvent): void {
        const scrollUpKeys = ['ArrowDown', 'PageUp'];
        const scrollDownKeys = ['ArrowUp', 'Space', 'PageDown'];

        if (scrollDownKeys.includes(event.code)) {
            this.scroll(-1);
        }

        if (scrollUpKeys.includes(event.code)) {
            this.scroll(1);
        }
    }

    private preventTouchScroll(event: TouchEvent): void {
        const touchEndY = event.touches[0].clientY; // Get Y position during touchmove

        if (touchEndY > this.touchStartY) {
            this.scroll(-1);
        } else if (touchEndY < this.touchStartY) {
            this.scroll(1);
        }
    }

    // Prevent default behavior for mouse wheel scrolling
    private preventMouseWheelScroll(event: WheelEvent): void {
        if (event.deltaY > 0) {
            this.scroll(1);
        }

        if (event.deltaY < 0) {
            this.scroll(-1);
        }
    }

    private pageIndex = 0;
    private scrollLock = false;
    private touchStartY = 0;
}
