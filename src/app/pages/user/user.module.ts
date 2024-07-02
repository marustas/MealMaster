import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [UserComponent, UserStatsComponent],
  imports: [CommonModule, UserRoutingModule, NgxEchartsModule.forChild()],
  exports: [UserComponent],
})
export class UserModule {}
