import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component/home.component';
import { LoginComponent } from './login.component/login.component';
import { UserComponent } from './user.component/user.component';

import { VigenereComponent } from './projects/vigenere.component/vigenere.component';

import { CanActivateGuard } from './auth/canActivateGuard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { MaterialModule } from './material-module';

import { fakeBackendProvider } from '../api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    VigenereComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [CanActivateGuard, fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
