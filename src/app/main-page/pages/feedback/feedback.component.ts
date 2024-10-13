import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
    public form = new FormGroup({
        name: new FormControl(''),
        lactose: new FormControl(false),
        gluten: new FormControl(false),
        participate: new FormControl('1')
    });

    protected sendFeedback(): void {
        console.log(this.form.value);
    }
}
