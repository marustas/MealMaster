import { EChartsOption } from 'echarts';

export function displayChart(
  currentCalories: number,
  calorieGoal: number,
  currentCaloriePercentage: number,
  subtextColor: string
): EChartsOption {
  return {
    title: {
      text: 'Calorie Intake',
      left: 'center',
      top: 'center',
      textStyle: {
        fontSize: 20,
        color: '#3c3e3c',
      },
      subtext: `${currentCalories} / ${calorieGoal}`,
      subtextStyle: {
        fontSize: 16,
        color: subtextColor,
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
            borderColor: subtextColor,
            color: subtextColor,
          },
        },
        axisLine: {
          lineStyle: {
            width: 13,
            color: [
              [currentCaloriePercentage, '#bfbebe'],
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
        data: [{ value: currentCaloriePercentage }],
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
