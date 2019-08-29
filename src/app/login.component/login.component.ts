import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
    public user: string;
    public pass: string;
    constructor(private loginService: LoginService, private router: Router) {
    }
    login() {
        this.loginService.setToken('hello');
        this.router.navigateByUrl('/');
    }

  // ngOninit() {
  // }
}
