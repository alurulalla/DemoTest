import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodosComponent } from './todos/todos.component';
import { HighComponent } from './todos/high/high.component';
import { LowComponent } from './todos/low/low.component';
import { MediumComponent } from './todos/medium/medium.component';
import { MaterializeModule } from 'angular2-materialize';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2'
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

var config = {
    apiKey: "AIzaSyBZ9urKnfdAaw9-Roy-jHlDOvEA9nwmuz0",
    authDomain: "appauthangular-ac6aa.firebaseapp.com",
    databaseURL: "https://appauthangular-ac6aa.firebaseio.com",
    projectId: "appauthangular-ac6aa",
    storageBucket: "appauthangular-ac6aa.appspot.com",
    messagingSenderId: "641747124725"
  };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    HighComponent,
    LowComponent,
    MediumComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AngularFireModule.initializeApp(config),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
