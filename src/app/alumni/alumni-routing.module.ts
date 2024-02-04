import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumniPage } from './alumni.page';

const routes: Routes = [
  {
    path: '',
    component: AlumniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumniPageRoutingModule {}
