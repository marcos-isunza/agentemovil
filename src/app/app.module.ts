import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { SalesComponent } from './sales/sales.component';
import { OrdersComponent } from './orders/orders.component';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetupComponent } from './setup/setup.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LandingComponent,
    SalesComponent,
    OrdersComponent,
    SetupComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'menu', component: LandingComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'config', component: SetupComponent },
      { path: 'signup', component: SignupComponent },
      { path: ' ', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule {}
