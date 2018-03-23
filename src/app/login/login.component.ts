import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { User } from '../interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _service: Service) {}
  response: {};
  errorMessage: string;
  username: string;
  password: string;

  ngOnInit() {}

  checkUser() {
    let user = new User(this.username, this.password);
    this._service.authUser(user).subscribe(postData => {
      console.log(postData);
      this.response = postData;
      localStorage.setItem('user', postData.username);
    }, error => (this.errorMessage = <any>error));
  }
}
