import {Component, inject, signal} from '@angular/core';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-testing',
  standalone: true,
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {
  public AuthService = inject(AuthService)
  public authorized = signal<boolean>(false)
  constructor() {
    this.authorized = this.AuthService.getAuth()
  }

  login() {
   this.AuthService.login();
  }
  logout() {
    this.AuthService.logout();
  }
}
