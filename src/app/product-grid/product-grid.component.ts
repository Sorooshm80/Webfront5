import { ProductTableComponent } from './../product-table/product-table.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {Component} from '@angular/core';
import {NgFor} from '@angular/common';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  standalone: true,
  imports: [MatGridListModule, NgFor],
})
export class ProductGridComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
