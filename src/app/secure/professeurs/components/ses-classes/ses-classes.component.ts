import { Component } from '@angular/core';

@Component({
  selector: 'app-ses-classes',
  templateUrl: './ses-classes.component.html',
  styleUrls: ['./ses-classes.component.css']
})
export class SesClassesComponent {
  semestre = [
    { label: 'semestre 1', value: 'S1' },
    { label: 'semestre 2', value: 'S2' }
  ];

  module = [
    { label: 'module 1', value: 'M1' },
    { label: 'module 2', value: 'M2' }
  ];
}
