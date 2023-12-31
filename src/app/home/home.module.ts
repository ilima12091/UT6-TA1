import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { CardComponentModule } from '../card/card.module';
import { CardCreationFormComponentModule } from '../card-creation-form/card-creation-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
    CardComponentModule,
    CardCreationFormComponentModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
