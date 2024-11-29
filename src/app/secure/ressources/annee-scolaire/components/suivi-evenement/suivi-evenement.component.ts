import { Component } from '@angular/core';

@Component({
  selector: 'app-suivi-evenement',
  templateUrl: './suivi-evenement.component.html',
  styleUrls: ['./suivi-evenement.component.css']
})
export class SuiviEvenementComponent {
  totalItems: number = 4;
  itemsPerPage: number = 3;

  onPageChange(page: number): void {
    console.log('Page actuelle:', page);
  }

  onItemsPerPageChange(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    console.log('Nombre d’éléments par page:', itemsPerPage);

  }
}
