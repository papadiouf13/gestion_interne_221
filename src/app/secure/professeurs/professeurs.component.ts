import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professeurs',
  templateUrl: './professeurs.component.html',
  styleUrls: ['./professeurs.component.css']
})
export class ProfesseursComponent {
  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
