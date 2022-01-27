import { Component, OnInit } from '@angular/core';
import { CartStatusType } from 'src/app/enums/cart_status_type';
import { Cart } from '../../models/cart.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listOfCart: Cart[] = [
    {
      id: 1,
      status: CartStatusType.Completed,
    },
    {
      id: 2,
      status: CartStatusType.Pending,
    },
    {
      id: 3,
      status: CartStatusType.Pending,
    }
  ];

  ngOnInit(): void {
  }
}
