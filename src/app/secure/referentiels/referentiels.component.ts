import { Component } from '@angular/core';

@Component({
  selector: 'app-referentiel',
  templateUrl: './referentiels.component.html',
  styleUrls: ['./referentiels.component.css']
})
export class ReferentielsComponent {
  ues = [{ enabled: false }];
  semestres = ['Semestre1', 'Semestre2', 'Semestre3', 'Semestre4', 'Semestre5', 'Semestre6'];

  createReferentiel() {
    // Implémentez la logique de création de référentiel
    console.log('Référentiel créé');
  }

  handleModuleChange(ue: any) {
    ue.enabled = true;
  }

 ajouterUE() {
    // Ajouter une nouvelle UE avec l'état initial disabled
    this.ues.push({ enabled: false });
    console.log('Unité d\'enseignement ajoutée');
  }
}
