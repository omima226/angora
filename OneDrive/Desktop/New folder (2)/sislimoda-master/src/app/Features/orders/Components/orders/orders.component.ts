import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  ColumnMode = ColumnMode;

  orders: any[] = [
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
    { img: '', details: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor', shippingAddress: '2C3F+9F4, New Cairo 1,Cairo Governorate 4723112', customerName: 'Aysar Ibrahim Aqeel ', orderStatus: 'shipped' },
  ]




  borderClass(row: any) {
    return 'row-border';
  }
}
