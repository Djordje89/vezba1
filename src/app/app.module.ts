import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { PrvaComponent } from './prva.component';
import { DrugaComponent } from './druga/druga.component';

@NgModule({
  declarations: [
    AppComponent,
    PrvaComponent,
    DrugaComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
