import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent {
  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
