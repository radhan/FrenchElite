import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFacebookPage } from './not-facebook.page';

const routes: Routes = [
  {
    path: '',
    component: NotFacebookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFacebookPageRoutingModule {}
