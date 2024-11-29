import { Component } from '@angular/core';

@Component({
  selector: 'app-type-ue',
  templateUrl: './type-ue.component.html',
  styleUrls: ['./type-ue.component.css']
})
export class TypeUeComponent {
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
