import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
    @Output('jumpToEnd') jumpToEnd = new EventEmitter<void>();

    protected onJump(): void {
        this.jumpToEnd.emit();
    }
}
