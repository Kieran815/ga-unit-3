import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { MasterSwordComponent } from './master-sword/master-sword.component';
import { HylianShieldComponent } from './hylian-shield/hylian-shield.component';




@NgModule({
  // declare what components will be called/used
  declarations: [
    MasterSwordComponent,
    HylianShieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MasterSwordComponent,
    HylianShieldComponent
  ]
})
export class EquipmentModule { }
