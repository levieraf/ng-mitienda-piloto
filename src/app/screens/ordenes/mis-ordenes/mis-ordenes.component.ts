import { Component, OnInit } from '@angular/core';
import { CartStatusType } from 'src/app/enums/cart_status_type';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-mis-ordenes',
  templateUrl: './mis-ordenes.component.html',
  styleUrls: ['./mis-ordenes.component.scss']
})
export class MisOrdenesComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
