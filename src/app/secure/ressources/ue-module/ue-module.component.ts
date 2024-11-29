import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ue-module',
  templateUrl: './ue-module.component.html',
  styleUrls: ['./ue-module.component.css']
})
export class UeModuleComponent {
  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
