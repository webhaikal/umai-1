import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { CompoundComponent } from './compound/compound.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SimpleComponent,
    CompoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
