import { Component, inject, signal, TemplateRef, ViewChild } from '@angular/core';
import {
  AuthorsCollection,
  AuthorStorage,
  FilterCheckboxInterfaces,
  NoResults,
  SortingOrder,
  WorkStorage
} from '../../shared';
import { WorkModel } from '../../shared/models';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCollapse, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-works-page',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    NoResults,
    NgbCollapse
  ],
  templateUrl: './works-page.html',
  styleUrl: './works-page.scss',
})
export class WorksPage {
  private workStorage = inject(WorkStorage);
  private authorStorage = inject(AuthorStorage);
  private offcanvas = inject(NgbOffcanvas);

  worksList = signal<WorkModel[]>(this.workStorage.getAll());

  searchQuery = '';
  sortingOrder: SortingOrder = 'asc';
  authorFilterOptions: FilterCheckboxInterfaces[];
  authorFilterCollapse = false;

  constructor() {
    this.authorFilterOptions = this.authorStorage.getAll().map((author) => ({
      id: author.id,
      value: author.name,
      checked: false,
    }));
  }


  onSorting() {
    this.sortingOrder = this.sortingOrder === 'desc' ? 'asc' : 'desc';
    this.fetchWorks();
  }

  openFilters(template: TemplateRef<any>) {
    this.offcanvas.open(template, { position: 'start' });
  }

  fetchWorks() {
    this.worksList.set(
      this.workStorage.getAll({
        searchQuery: this.searchQuery,
        sortingOrder: this.sortingOrder,
        authorsIds: this.authorFilterOptions.filter((item) => item.checked).map((item) => <AuthorsCollection>item.id),
      }),
    );
  }
}
