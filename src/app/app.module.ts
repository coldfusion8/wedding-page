import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LocalizationService } from 'src/global-services/localization/localization.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MainPageComponent } from './main-page/main-page.component';
import { SectionComponent } from './main-page/section/section.component';
import { ApartmentsComponent } from './main-page/pages/apartments/apartments.component';
import { FeedbackComponent } from './main-page/pages/feedback/feedback.component';
import { LocationComponent } from './main-page/pages/location/location.component';
import { MenuComponent } from './main-page/pages/menu/menu.component';
import { SoonComponent } from './main-page/pages/soon/soon.component';
import { WelcomeComponent } from './main-page/pages/welcome/welcome.component';
import { CountdownComponent } from './main-page/pages/countdown/countdown.component';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * AoT requires an exported function for factories.
 */
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, 'assets/languages/');
}

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        SectionComponent,
        ApartmentsComponent,
        FeedbackComponent,
        LocationComponent,
        MenuComponent,
        SoonComponent,
        WelcomeComponent,
        CountdownComponent
    ],
    imports: [
        ReactiveFormsModule,
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
    providers: [LocalizationService],
    bootstrap: [AppComponent]
})
export class AppModule {}
