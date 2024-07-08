import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from 'src/app/components/shared/modal/shared.module';

import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserComponent, UserStatsComponent],
  imports: [CommonModule, UserRoutingModule, NgxEchartsModule.forChild(), SharedModule, FormsModule],
  exports: [UserComponent],
})
export class UserModule {}
