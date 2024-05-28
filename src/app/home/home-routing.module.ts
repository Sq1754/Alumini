import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { SignInPage } from './sign-in/sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  { path: 'sign-in', component: SignInPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
