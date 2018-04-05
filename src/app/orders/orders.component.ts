import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  constructor() {}
  showOrderPanel = false;
  showNewOrder = false;

  ngOnInit() {}

  toggle(num) {
    if (num == 1) {
      this.showOrderPanel = !this.showOrderPanel;
      this.showNewOrder = false;
    }
    if (num == 2) {
      this.showNewOrder = !this.showNewOrder;
      this.showOrderPanel = false;
    }
  }
}
