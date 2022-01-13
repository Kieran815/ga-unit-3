import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
// BELOW: passed through `equipment.module.ts`
// import { MasterSwordComponent } from './master-sword/master-sword.component';
// import { HylianShieldComponent } from './hylian-shield/hylian-shield.component';

// Modules
import { EquipmentModule } from './equipment/equipment.module';

// Services
import { UserService} from './services/user/user.service';

// Module tells app what needs to be where.
@NgModule({
  declarations: [ // tells app what components to use, imported above automatically when creating a component (`ng g c component-name`).
    AppComponent,
    // BELOW: passed through `equipment.module.ts`
    // MasterSwordComponent,
    // HylianShieldComponent
  ],
  imports: [ // import helpers/modules for app functionality
    BrowserModule,
    EquipmentModule, // import `equipment` module into app
  ],
  providers: [], // providers for business logic services
  bootstrap: [AppComponent] // assign root component for app.
})
export class AppModule { }