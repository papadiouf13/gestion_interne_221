import { Component } from '@angular/core';

@Component({
  selector: 'app-civilite',
  templateUrl: './civilite.component.html',
  styleUrls: ['./civilite.component.css']
})
export class CiviliteComponent {
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
