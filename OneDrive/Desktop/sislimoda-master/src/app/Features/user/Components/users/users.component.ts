import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { UsersService } from '../../Services/users.service';
import { User } from 'src/assets/interfaces/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  ColumnMode = ColumnMode;

  users: User[] = []
  constructor(private _UsersService: UsersService) {

  }

  ngOnInit(): void {
    this._UsersService.getAllUsers().subscribe((res) => {
      this.users = res
    })
  }

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
