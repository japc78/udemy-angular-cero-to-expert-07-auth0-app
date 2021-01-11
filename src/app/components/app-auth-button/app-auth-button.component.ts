import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  templateUrl: './app.auth.component.html'
})
export class AuthButtonComponent {
  // Inject the authentication service into your component through the constructor
  constructor(@Inject(DOCUMENT) public document: Document, public authService: AuthService) {}
}