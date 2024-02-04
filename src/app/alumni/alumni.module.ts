import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumniPageRoutingModule } from './alumni-routing.module';

import { AlumniPage } from './alumni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumniPageRoutingModule
  ],
  declarations: [AlumniPage]
})
export class AlumniPageModule {}
