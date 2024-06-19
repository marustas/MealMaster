import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FridgeComponent } from './fridge.component';

@NgModule({
  declarations: [FridgeComponent],
  imports: [CommonModule],
  exports: [FridgeComponent],
})
export class FridgeModule {}
