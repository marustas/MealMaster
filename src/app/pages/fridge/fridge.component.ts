import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss'],
})
export class FridgeComponent {
  constructor(private router: Router) {}

  onAddProduct(): void {
    this.router.navigate(['products', 'new']);
  }
}
