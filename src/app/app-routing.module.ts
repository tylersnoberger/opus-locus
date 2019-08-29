import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component/home.component';
import { LoginComponent } from './login.component/login.component';
import { VigenereComponent } from './projects/vigenere.component/vigenere.component';


import { CanActivateGuard } from './auth/canActivateGuard';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', component: HomeComponent, canActivate: [CanActivateGuard] },
  { path: 'vigenere', component: VigenereComponent, canActivate: [CanActivateGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
