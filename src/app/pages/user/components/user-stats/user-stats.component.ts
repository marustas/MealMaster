import { Component, OnDestroy, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { GaugeChart } from 'echarts/charts';
import { LegendComponent, TooltipComponent } from 'echarts/components';
import { Subscription } from 'rxjs';
import { MealService } from 'src/app/pages/homepage/services/meal.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss'],
})
export class UserStatsComponent implements OnInit, OnDestroy {
  calorieSubscription!: Subscription;

  currentCalories = 1400;
  calorieGoal = 1000;
  currentCaloriePercentage = this.currentCalories / this.calorieGoal;
  remainingCalories: number = this.calorieGoal - this.currentCalories;
  exceedGoal: boolean = this.currentCalories > this.calorieGoal;

  subtextColor: string;
  readonly echartsExtentions: any[];
  echartsOptions: EChartsOption = {};

  constructor(private mealService: MealService) {
    this.calorieSubscription = this.mealService.currentCalories$.subscribe(
      (calories) => (this.currentCalories = calories)
    );
    this.echartsExtentions = [GaugeChart, TooltipComponent, TooltipComponent, LegendComponent];

    if (this.exceedGoal) {
      this.subtextColor = '#f61616';
    } else {
      this.subtextColor = '#399a18';
    }

    this.currentCaloriePercentage = +((this.currentCalories / this.calorieGoal) * 100).toFixed(2);
  }

  ngOnInit(): void {
    this.echartsOptions = {
      title: {
        text: 'Calorie Intake',
        left: 'center',
        top: 'center',
        textStyle: {
          fontSize: 20,
          color: '#3c3e3c',
        },
        subtext: `${this.currentCalories} / ${this.calorieGoal}`,
        subtextStyle: {
          fontSize: 16,
          color: this.subtextColor,
        },
      },
      series: [
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false,
          },

          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1,
              borderColor: '#3c3e3c',
              color: this.subtextColor,
            },
          },
          axisLine: {
            lineStyle: {
              width: 13,
              color: [
                [this.currentCaloriePercentage / 100, '#bfbebe'],
                [1, '#bfbebe'],
              ],
            },
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            distance: 50,
          },
          data: [{ value: this.currentCaloriePercentage }],
          title: {
            fontSize: 14,
          },
          detail: {
            show: false,
          },
        },
      ],
    };
  }

  ngOnDestroy(): void {
    this.calorieSubscription.unsubscribe();
  }
}
