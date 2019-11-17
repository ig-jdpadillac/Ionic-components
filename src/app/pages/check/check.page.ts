import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  public data =
  [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiay',
      selected: false
    },
    {
      name: 'success',
      selected: true
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
