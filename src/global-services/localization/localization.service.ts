import { Injectable, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ILocalStorageLocalizationSettings } from './types';

/**
 * A service for managing localization settings.
 * @@Injectable
 */
@Injectable({
    providedIn: 'root'
})
export class LocalizationService implements OnDestroy {
    constructor(private readonly translateService: TranslateService) {
        this.onStorageChange = this.onStorageChange.bind(this);
        this.listenToChange();
    }

    ngOnDestroy(): void {
        window.removeEventListener('storage', this.onStorageChange);
    }

    /**
     * Uses the language setting from local storage to update the translate service and date adapter.
     */
    public useLocalStorageLanguage(): void {
        const readLocalStorage = localStorage.getItem('local');
        if (readLocalStorage === null) {
            this.translateService.use('hu_HU');
            return;
        }

        const settings = JSON.parse(readLocalStorage) as ILocalStorageLocalizationSettings;

        this.translateService.use(settings.language);
    }

    private onStorageChange(event: StorageEvent): void {
        if (event.key !== 'local') {
            return;
        }

        this.useLocalStorageLanguage();
    }

    private listenToChange(): void {
        window.addEventListener('storage', this.onStorageChange);
    }
}
