import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardCreationFormComponent } from './card-creation-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [CardCreationFormComponent],
  exports: [CardCreationFormComponent],
})
export class CardCreationFormComponentModule {}
