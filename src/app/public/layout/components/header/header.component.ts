import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() isSidebarExpanded: boolean = true; // État du sidebar transmis par le composant parent
  @Output() toggleSidebar = new EventEmitter<void>(); // Événement pour basculer l'état du sidebar

  onToggleSidebar(): void {
    this.toggleSidebar.emit(); // Déclenche l'événement pour informer le parent
  }

  anneeScolaire = [
    { label: 'Année: 2023-2024', value: '2023-2024' },
    { label: 'Année: 2024-2025', value: '2024-2025' }
  ];

  isDrawerOpen = false;

  toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  closeDrawer(): void {
    this.isDrawerOpen = false;
  }

  // Permet de fermer le drawer si on clique en dehors
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.drawer') && !target.closest('.group')) {
      this.closeDrawer();
    }
  }
}
