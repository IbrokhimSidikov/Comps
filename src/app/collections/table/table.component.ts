import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  @Input() classNames = '';

  @Input() data = [];
  @Input() headers: any = [];

  constructor() {

  }

  ngOnInit() {

  }
}
