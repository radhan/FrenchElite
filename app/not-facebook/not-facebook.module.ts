import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotFacebookPageRoutingModule } from './not-facebook-routing.module';

import { NotFacebookPage } from './not-facebook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotFacebookPageRoutingModule
  ],
  declarations: [NotFacebookPage]
})
export class NotFacebookPageModule {}
