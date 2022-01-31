import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Cart } from 'src/app/models/cart.model';
import * as cartActions from 'src/app/ngrx/actions/carts.actions';
import { AppState } from 'src/app/ngrx/app.reducer';

@Component({
  selector: 'app-mis-ordenes',
  templateUrl: './mis-ordenes.component.html',
  styleUrls: ['./mis-ordenes.component.scss']
})
export class MisOrdenesComponent implements OnInit {

  carts: Cart[] = [];

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select('carts').subscribe(globalState => {
      this.carts = globalState.carts;
    });
  }

  eliminarOrden(cart: Cart) {
    console.info(cart);
  }

  nuevaOrden() {
    const cart = new Cart();
    this.store.dispatch(cartActions.addCart({ cart }));
    this.router.navigate(['/nueva-orden']);
  }
}
