import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
} from 'echarts/components';
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';
import calculateChartData from './utils/calculateChartData';
import { DAYS, STARTING_YEAR } from './utils/constants';

export default function SmoothLineChart({ yearWiseFunctions, startingPoint }) {

  echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]
  );

  const years = 10

  const chartOption = {
    xAxis: {
      type: 'category',
      // generate array of 10 years from 2000 to 2009 for x axis
      axisTick: {
        interval: DAYS - 1
      },
      axisLabel: {
        interval: DAYS - 1,
        formatter: function (value, index) {
          if (index % DAYS === 0) {
            return STARTING_YEAR + index / DAYS
          }
        }
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: calculateChartData(years, yearWiseFunctions, startingPoint),
        type: 'line',
        smooth: true,
        symbol: "none",
        // markLine: {
        //   symbol: ['none', 'none'],
        //   label: { show: false },
        //   data: Array(years).fill(0).map((item, index) => {
        //     return {
        //       xAxis: index
        //     }
        //   })
        // },
      }
    ]
  };

  return <ReactEChartsCore
    echarts={echarts}
    option={chartOption}
    notMerge={true}
    lazyUpdate={true}
  />
}