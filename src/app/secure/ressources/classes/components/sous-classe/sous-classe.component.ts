import { Component } from '@angular/core';

@Component({
  selector: 'app-sous-classe',
  templateUrl: './sous-classe.component.html',
  styleUrls: ['./sous-classe.component.css']
})
export class SousClasseComponent {
  classe = [
    { label: ' Classe 1', value: 'C1' },
    { label: ' Classe 2', value: 'C2' }
  ];

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
