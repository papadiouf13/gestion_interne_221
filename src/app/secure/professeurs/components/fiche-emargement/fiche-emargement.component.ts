import { Component } from '@angular/core';

@Component({
  selector: 'app-fiche-emargement',
  templateUrl: './fiche-emargement.component.html',
  styleUrls: ['./fiche-emargement.component.css']
})
export class FicheEmargementComponent {
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
