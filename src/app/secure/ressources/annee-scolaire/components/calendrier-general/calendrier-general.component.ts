import { Component } from '@angular/core';

@Component({
  selector: 'app-calendrier-general',
  templateUrl: './calendrier-general.component.html',
  styleUrls: ['./calendrier-general.component.css']
})
export class CalendrierGeneralComponent {
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
