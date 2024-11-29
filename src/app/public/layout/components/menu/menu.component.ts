import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throttle } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isSidebarExpanded: boolean = true; // Par défaut, le sidebar est ouvert


  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded; // Inverse l'état du sidebar
  }

  visible: boolean = false; // Par défaut, le menu est caché

  constructor(private route: Router) {

  }
  ngOnInit() {
    this.route.events.subscribe(event => {
      this.visible = this.route.url !== '/accueil' && this.route.url !== '/connexion';

      console.log('Current URL:', this.route.url);
    });
  }
}
