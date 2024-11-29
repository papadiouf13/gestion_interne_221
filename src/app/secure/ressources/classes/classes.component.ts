import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  constructor(private router: Router){}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
