import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainComponent } from './contain/contain.component';
import { FooterComponent } from './footer/footer.component';

import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ContainComponent,
    FooterComponent,

    FormComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
