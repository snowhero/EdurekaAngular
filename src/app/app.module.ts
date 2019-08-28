import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SubServerComponent } from './sub-server/sub-server.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { YellowComponent } from './yellow/yellow.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SubServerComponent,
    RedComponent,
    GreenComponent,
    YellowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
