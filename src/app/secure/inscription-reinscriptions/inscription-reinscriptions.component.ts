import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription-reinscriptions',
  templateUrl: './inscription-reinscriptions.component.html',
  styleUrls: ['./inscription-reinscriptions.component.css']
})
export class InscriptionReinscriptionsComponent {
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
