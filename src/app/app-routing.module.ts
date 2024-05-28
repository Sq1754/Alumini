import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'alumni',
    loadChildren: () => import('./alumni/alumni.module').then( m => m.AlumniPageModule)
  },
  {
    path: 'reunion',
    loadChildren: () => import('./reunion/reunion.module').then( m => m.ReunionPageModule)
  },
  {
    path: 'membership',
    loadChildren: () => import('./membership/membership.module').then( m => m.MembershipPageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./donate/donate.module').then( m => m.DonatePageModule)
  },
{
  path: 'sign-in',
<<<<<<< HEAD
  loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
}
=======
  loadChildren: () => import('./home/sign-in/sign-in.module').then( m => m.SignInPageModule)
},

>>>>>>> 6117182d28fd0238a21eaf04d769a7959f6c918c
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
