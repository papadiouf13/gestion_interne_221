import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Input() itemsPerPageOptions: number[] = [3, 5, 10];
  @Output() pageChange = new EventEmitter<number>();
  @Output() itemsPerPageChange = new EventEmitter<number>();

  currentPage: number = 1;
  itemsPerPage: number = this.itemsPerPageOptions[0];

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get totalPagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  onPageSelect(page: number) {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  onItemsPerPageChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.itemsPerPage = parseInt(value, 10);
    this.currentPage = 1;
    this.itemsPerPageChange.emit(this.itemsPerPage);
    this.pageChange.emit(this.currentPage);
  }
}
