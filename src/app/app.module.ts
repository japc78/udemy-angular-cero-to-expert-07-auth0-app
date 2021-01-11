import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';
import { PricesComponent } from './components/prices/prices.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/app-auth-button/app-auth-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PrivateComponent,
    PricesComponent,
    AuthButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'japc-test.eu.auth0.com',
      clientId: 'ZwAZ6s2mnl35z3AyC2I2KjNjt5ySxcmf'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
