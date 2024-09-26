import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/global-services/localization/localization.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(private readonly localizationService: LocalizationService) {}

    ngOnInit(): void {
        this.localizationService.useLocalStorageLanguage();
    }
}
