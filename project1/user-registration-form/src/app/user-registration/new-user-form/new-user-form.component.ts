import { Component, OnInit } from '@angular/core';
import { NewUser } from './new-user';
import { CreateUserService } from './create-user.service';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {

  constructor(private createUserService: CreateUserService) { }

  model: NewUser = new NewUser();
  myform: FormGroup;
  showMsg: boolean = false;

  ngOnInit() {
    this.model = new NewUser();
  }

  onReset(form:NgForm){
    console.log("rest method called");
    form.reset();
    this.showMsg = false;
  }

  onSubmit(form:NgForm) {
    console.log("We are in onSubmit method");
    console.log("model firstname " + this.model.firstName);
    if (this.model.firstName != null && this.model.lastName != null && this.model.email != null && this.model.department != null) {
      this.createUserService.createUser(this.model);
      this.showMsg = true;
      // form.reset();
    }

  }
}
