import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { LoginService } from '../services/login.service';
import { first } from 'rxjs/operators';

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
        this.loginService.authenticate(this.user, this.pass)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate(['/']);
            },
            error => {
                console.log(error);
            });;
    }

  // ngOninit() {
  // }
}
