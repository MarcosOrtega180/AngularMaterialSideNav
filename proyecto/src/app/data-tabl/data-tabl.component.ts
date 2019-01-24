import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTablDataSource } from './data-tabl-datasource';

@Component({
  selector: 'app-data-tabl',
  templateUrl: './data-tabl.component.html',
  styleUrls: ['./data-tabl.component.css']
})
export class DataTablComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTablDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new DataTablDataSource(this.paginator, this.sort);
  }
}
