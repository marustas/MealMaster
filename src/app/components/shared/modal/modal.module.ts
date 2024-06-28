import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../modal/modal.component';
import { SpinnerComponent } from '../../spinner/spinner.component';

@NgModule({
  declarations: [ModalComponent, SpinnerComponent],
  imports: [CommonModule],
  exports: [ModalComponent, SpinnerComponent],
})
export class ModalModule {}
