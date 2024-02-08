import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data: any = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Ibrokhim', age: 22, job: 'Software Engineer', employed: false },
    { name: 'Murodilla', age: 52, job: 'Qumorboz', employed: true }
  ];
  headers: any = [
    { key: 'employed', label: 'Has a job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ]

  constructor() {

  }

  ngOnInit() {

  }
}
