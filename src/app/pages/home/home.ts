import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  imports: [
    MatPaginator,
    MatGridList,
    MatGridTile
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
