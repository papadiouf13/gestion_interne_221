import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domaine-specialite',
  templateUrl: './domaine-specialite.component.html',
  styleUrls: ['./domaine-specialite.component.css']
})
export class DomaineSpecialiteComponent {
  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
