import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LocalizationService } from 'src/global-services/localization/localization.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DateAdapter, MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';
import { MainPageComponent } from './main-page/main-page.component';
import { SectionComponent } from './main-page/section/section.component';

/**
 * AoT requires an exported function for factories.
 */
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, 'assets/languages/');
}

@NgModule({
    declarations: [AppComponent, MainPageComponent, SectionComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        LocalizationService,
        {
            provide: DateAdapter<Date>,
            useClass: NativeDateAdapter,
            deps: [MAT_DATE_LOCALE]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
