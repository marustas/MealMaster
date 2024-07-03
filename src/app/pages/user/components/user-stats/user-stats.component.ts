import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { PieChart } from 'echarts/charts';
import { LegendComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss'],
})
export class UserStatsComponent implements OnInit {
  currentCalories = 1700;
  calorieGoal = 2000;
  remainingCalories: number = this.calorieGoal - this.currentCalories;
  exceedGoal: boolean = this.currentCalories > this.calorieGoal;
  subtextColor: string;

  readonly echartsExtentions: any[];
  echartsOptions: EChartsOption = {};

  constructor() {
    this.echartsExtentions = [PieChart, TooltipComponent, TooltipComponent, LegendComponent];
    if (this.exceedGoal) {
      this.subtextColor = '#f61616';
    } else {
      this.subtextColor = '#399a18';
    }
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
          fontSize: 22,
          color: this.subtextColor,
        },
      },
      series: [
        {
          name: 'Calories',
          type: 'pie',
          radius: ['64%', '70%'],
          label: {
            show: false,
            position: 'center',
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: this.currentCalories, name: 'Current Calories' },
            { value: Math.max(this.remainingCalories, 0), name: 'Remaining Calories' },
          ],
          itemStyle: {
            color: (params: any) => {
              if (params.data.name === 'Current Calories') {
                return this.exceedGoal ? '#f61616' : '#399a18';
              }
              return '#a8e694';
            },
            borderColor: '#3c3e3c',
            borderWidth: 1,
            borderRadius: 8,
          },
        },
      ],
    };
  }
}
