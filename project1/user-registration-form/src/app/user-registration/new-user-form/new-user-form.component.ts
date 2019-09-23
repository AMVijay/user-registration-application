import { Component, OnInit } from '@angular/core';
import { NewUser } from './new-user';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {

  constructor() { }

  model : NewUser = new NewUser();

  ngOnInit() {
    this.model = new NewUser();
  }


  onSubmit(){
    console.log("We are in onSubmit method");
  }
}
