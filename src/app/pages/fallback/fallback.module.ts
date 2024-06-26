import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FallbackComponent } from './fallback.component';
import { FallbackRoutingModule } from './fallback-routing.module';

@NgModule({
  declarations: [FallbackComponent],
  imports: [CommonModule, FallbackRoutingModule],
  exports: [FallbackComponent],
})
export class FallbackModule {}
