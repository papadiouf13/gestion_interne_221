import { Component } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent {

  semestres = [
    { label: 'Semestre 1', value: 'S1' },
    { label: 'Semestre 2', value: 'S2' },
    { label: 'Semestre 3', value: 'S3' }
  ];

  niveaux = [
    { label: 'Niveau 1', value: 'N1' },
    { label: 'Niveau 2', value: 'N2' },
    { label: 'Niveau 3', value: 'N3' }
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
