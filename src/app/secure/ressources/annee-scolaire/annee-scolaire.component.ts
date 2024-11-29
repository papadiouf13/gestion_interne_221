import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annee-scolaire',
  templateUrl: './annee-scolaire.component.html',
  styleUrls: ['./annee-scolaire.component.css']
})
export class AnneeScolaireComponent {
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
