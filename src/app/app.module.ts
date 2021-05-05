import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FormGridComponent } from './form-grid/form-grid.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormCustomComponent } from './form-custom/form-custom.component';
import { FormDividerComponent } from './form-divider/form-divider.component';
import { McFormGridModule } from 'mc-form-grid';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormGridComponent,
    FormInputComponent,
    FormCustomComponent,
    FormDividerComponent
  ],
  imports: [
    McFormGridModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
