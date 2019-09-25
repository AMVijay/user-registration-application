import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewUser } from './new-user';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  serviceUrl = environment.userregistrationserviceUri + "/employees/create";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  createUser(newUser: NewUser) {
    console.log("createUser method");

    let bodyString = JSON.stringify(newUser); // Stringify payload

    return this.http.post<NewUser>(this.serviceUrl, bodyString, this.httpOptions).subscribe();
  }
}
