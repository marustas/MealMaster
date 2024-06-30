import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalComponent } from '../../modal/modal.component';
import { SearchComponent } from '../../search/search.component';
import { SpinnerComponent } from '../../spinner/spinner.component';

@NgModule({
  declarations: [ModalComponent, SpinnerComponent, SearchComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ModalComponent, SpinnerComponent, SearchComponent],
})
export class SharedModule {}
