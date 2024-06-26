import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-switch',
  templateUrl: './view-switch.component.html',
  styleUrls: ['./view-switch.component.scss'],
})
export class ViewSwitchComponent {
  cardView: boolean = false;

  constructor(private router: Router) {}

  onToggleView(event: Event) {
    this.cardView = (event.target as HTMLInputElement).checked;
    const route = this.cardView ? 'cards' : 'table';
    this.router.navigate([`fridge/${route}`]);
  }
}
