import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { UserRegistrationRoutingModule } from './user-registration-routing.module';



@NgModule({
  declarations: [NewUserFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRegistrationRoutingModule
  ],
  exports: [NewUserFormComponent]
})
export class UserRegistrationModule { }
