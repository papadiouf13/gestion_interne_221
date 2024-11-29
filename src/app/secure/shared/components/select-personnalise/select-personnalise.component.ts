import { Component, Input } from '@angular/core';

interface Option {
  label: string;
  value: string;
  checked?: boolean;
}

@Component({
  selector: 'app-select-personnalise',
  templateUrl: './select-personnalise.component.html',
  styleUrls: ['./select-personnalise.component.css']
})
export class SelectPersonnaliseComponent {
  @Input() options: Option[] = [];
  @Input() placeholder: string = 'Choisir';
  @Input() iconClass: string | null = null;

  dropdownVisible = false;
  displayText = '';

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  updateSelection() {
    const selectedOptions = this.options
      .filter(option => option.checked)
      .map(option => option.label);

    this.displayText = selectedOptions.length > 0
      ? selectedOptions.join(', ')
      : '';
  }
}
