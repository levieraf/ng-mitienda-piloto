import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from 'src/app/models/cart.model';
import { AppState } from 'src/app/ngrx/app.reducer';

@Component({
  selector: 'app-mis-ordenes',
  templateUrl: './mis-ordenes.component.html',
  styleUrls: ['./mis-ordenes.component.scss']
})
export class MisOrdenesComponent implements OnInit {

  carts: Cart[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('carts').subscribe(carts => {
      this.carts = carts;
    });
  }

  eliminarOrden(cart: Cart) {
    console.info(cart);
  }
}
