import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  constructor() {}
  showExistence = false;
  showOrders = false;
  showSales = false;

  ngOnInit() {}

  toggle(num) {
    if (num == 1) {
      this.showExistence = !this.showExistence;
      this.showOrders = false;
      this.showSales = false;
    }
    if (num == 2) {
      this.showOrders = !this.showOrders;
      this.showExistence = false;
      this.showSales = false;
    }
    if (num == 3) {
      this.showSales = !this.showSales;
      this.showExistence = false;
      this.showOrders = false;
    }
  }
}
