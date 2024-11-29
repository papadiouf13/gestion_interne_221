import { Component } from '@angular/core';

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent {
  cycle = [
    { label: 'Cycle 1', value: 'C1' },
    { label: 'Cycle 2', value: 'C2' }
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
