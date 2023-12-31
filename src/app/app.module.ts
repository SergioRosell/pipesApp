import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//configuración del locale de la app
import localesEs  from '@angular/common/locales/es';
import localJa  from '@angular/common/locales/ja';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localesEs);
registerLocaleData(localJa);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
