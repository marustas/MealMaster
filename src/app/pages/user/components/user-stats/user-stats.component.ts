import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { GaugeChart } from 'echarts/charts';
import { LegendComponent, TooltipComponent } from 'echarts/components';
import { tap } from 'rxjs';
import { MealService } from 'src/app/pages/homepage/services/meal.service';

import { displayChart } from './calorieChart';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss'],
})
export class UserStatsComponent {
  currentCalories = 0;
  calorieGoal = 2000;
  newCalorieGoal = 0;
  currentCaloriePercentage = 0;
  exceedGoal = false;
  subtextColor = '';

  readonly echartsExtentions: any[];
  echartsOptions: EChartsOption = {};

  constructor(
    private mealService: MealService,
    private userService: UserService
  ) {
    this.echartsExtentions = [GaugeChart, TooltipComponent, TooltipComponent, LegendComponent];
    this.userService.getUser().subscribe((user) => {
      this.calorieGoal = user.calorieGoal;
      if (this.calorieGoal > 0) {
        this.calculateCalories();
      }
    });

    this.mealService.calories$
      .pipe(
        tap((calories) => {
          this.currentCalories = calories;
          if (this.calorieGoal > 0) {
            this.calculateCalories();
          }
        })
      )
      .subscribe();
  }

  calculateCalories(): void {
    this.currentCaloriePercentage = +((this.currentCalories / this.calorieGoal) * 100).toFixed(2);
    this.exceedGoal = this.currentCalories > this.calorieGoal;
    this.subtextColor = this.exceedGoal ? '#f61616' : '#399a18';

    this.echartsOptions = displayChart(
      this.currentCalories,
      this.calorieGoal,
      this.currentCaloriePercentage,
      this.subtextColor
    );
  }

  setCalorieGoal(): void {
    this.userService.setCalorieGoal(this.newCalorieGoal).subscribe((response) => {
      this.calorieGoal = response;
    });
  }
}
