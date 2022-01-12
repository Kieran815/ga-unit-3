import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterSwordComponent } from './master-sword/master-sword.component';
import { HylianShieldComponent } from './hylian-shield/hylian-shield.component';

// Module tells app what needs to be where.
@NgModule({
  declarations: [ // tells app what components to use, imported above automatically when creating a component (`ng g c component-name`).
    AppComponent,
    MasterSwordComponent,
    HylianShieldComponent
  ],
  imports: [ // import helpers/modules for app functionality
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // assign root component for app.
})
export class AppModule { }