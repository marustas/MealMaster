import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserComponent, UserStatsComponent],
  imports: [CommonModule, UserRoutingModule, NgxEchartsModule.forChild()],
  exports: [UserComponent],
})
export class UserModule {}
