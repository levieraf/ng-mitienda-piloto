import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { AppState } from 'src/app/ngrx/app.reducer';

@Component({
  selector: 'app-nueva-orden',
  templateUrl: './nueva-orden.component.html',
  styleUrls: ['./nueva-orden.component.scss']
})
export class NuevaOrdenComponent implements OnInit {
  products: Product[] = [];

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select('products').subscribe(globalState => {
      this.products = globalState.products;
    });
  }

  completarOrden() { 
    this.router.navigate(['/'])
  }

  increment() {

  }
}
