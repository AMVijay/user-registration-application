import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { CreateUserService } from './new-user-form/create-user.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [NewUserFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UserRegistrationRoutingModule
  ],
  exports: [NewUserFormComponent],
  providers: [CreateUserService]
})
export class UserRegistrationModule { }
