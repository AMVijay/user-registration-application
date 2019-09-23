import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';


const routes: Routes = [
    {path: 'new-user-register',component: NewUserFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)]
})
export class UserRegistrationRoutingModule { }