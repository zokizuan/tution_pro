import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessPageComponent } from './feature/access-page/access-page.component';
import { Page404Component } from './feature/rideManagement/page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: 'applications', pathMatch: 'full' },
  { path: 'applications', pathMatch: 'full', component: AccessPageComponent },
  {
    path: 'rideManagement',
    loadChildren: () => import('./feature/rideManagement/rideManagement.module').then(m => m.RideManagementModule)
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
