import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FallbackRoutingModule } from './fallback-routing.module';
import { FallbackComponent } from './fallback.component';

@NgModule({
  declarations: [FallbackComponent],
  imports: [CommonModule, FallbackRoutingModule],
  exports: [FallbackComponent],
})
export class FallbackModule {}
