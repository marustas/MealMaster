import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { GaugeChart } from 'echarts/charts';
import { LegendComponent, TooltipComponent } from 'echarts/components';
import { tap } from 'rxjs';
import { MealService } from 'src/app/pages/homepage/services/meal.service';

import { displayChart } from './calorieChart';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss'],
})
export class UserStatsComponent {
  currentCalories = 0;
  calorieGoal = 2000;
  currentCaloriePercentage = 0;
  exceedGoal = false;
  subtextColor = '';

  readonly echartsExtentions: any[];
  echartsOptions: EChartsOption = {};

  constructor(private mealService: MealService) {
    this.echartsExtentions = [GaugeChart, TooltipComponent, TooltipComponent, LegendComponent];
    this.mealService.calories$
      .pipe(
        tap((calories) => {
          this.currentCalories = calories;
          this.currentCaloriePercentage = +((this.currentCalories / this.calorieGoal) * 100).toFixed(2);
          this.exceedGoal = this.currentCalories > this.calorieGoal;
          this.subtextColor = this.exceedGoal ? '#f61616' : '#399a18';
          if (this.exceedGoal) {
            this.subtextColor = '#f61616';
          } else {
            this.subtextColor = '#399a18';
          }
          this.echartsOptions = displayChart(
            this.currentCalories,
            this.calorieGoal,
            this.currentCaloriePercentage,
            this.subtextColor
          );
        })
      )
      .subscribe();
  }
}
