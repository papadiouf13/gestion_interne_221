import { Component } from '@angular/core';

@Component({
  selector: 'app-annee-scol',
  templateUrl: './annee-scol.component.html',
  styleUrls: ['./annee-scol.component.css']
})
export class AnneeScolComponent {
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
