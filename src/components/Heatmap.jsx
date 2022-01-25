import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsHeatmap from "highcharts/modules/heatmap";

HighchartsHeatmap(Highcharts);

export function HeatmapChart() {
  const chartOptions = {
    chart: {
      type: "heatmap",
      marginTop: 40,
      marginBottom: 80,
      plotBorderWidth: 1,
      height: 550,

      events: {
        render: function () {
          const chart = this;
          const xAxis = chart.xAxis[0];
          const yAxis = chart.yAxis[0];
          const seriesOne = chart.series[0];
          const seriesTwo = chart.series[1];

          console.log({ chart, xAxis, yAxis, seriesOne, seriesTwo });
        },
      },
    },

    title: {
      text: null,
    },

    xAxis: {
      categories: [
        "Significantly Worse",
        "Moderately Worse",
        "Slightly Worse",
        "Similar",
        "Slightly Better",
        "Moderately Better",
        "Significantly Better",
      ],
      opposite: true,
      gridLineDashStyle: "ShortDot",
    },

    yAxis: {
      categories: [
        "Significantly Worse",
        "Moderately Worse",
        "Slightly Worse",
        "Similar",
        "Slightly Better",
        "Moderately Better",
        "Significantly Better",
      ],
      title: null,
      reversed: true,
      gridLineDashStyle: "ShortDot",
    },

    // accessibility: {
    //   point: {
    //     descriptionFormatter: function (point) {
    //       var ix = point.index + 1,
    //         xName = getPointCategoryName(point, "x"),
    //         yName = getPointCategoryName(point, "y"),
    //         val = point.value;
    //       return ix + ". " + xName + " sales " + yName + ", " + val + ".";
    //     },
    //   },
    // },

    colorAxis: {
      min: 0,
      minColor: "#FFFFFF",
      maxColor: Highcharts.getOptions().colors[0],
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        name: "Sales per employee",
        borderWidth: 1,
        data: [
          [0, 0, 10],
          [0, 1, 19],
          [0, 2, 8],
          [0, 3, 24],
          [0, 4, 67],
          [0, 5, 70],
          [0, 6, 70],
          [1, 0, 92],
          [1, 1, 58],
          [1, 2, 78],
          [1, 3, 117],
          [1, 4, 48],
          [1, 5, 70],
          [1, 6, 70],
          [2, 0, 35],
          [2, 1, 15],
          [2, 2, 123],
          [2, 3, 64],
          [2, 4, 52],
          [2, 5, 70],
          [2, 6, 70],
          [3, 0, 72],
          [3, 1, 132],
          [3, 2, 114],
          [3, 3, 19],
          [3, 4, 16],
          [3, 5, 70],
          [3, 6, 70],
          [4, 0, 38],
          [4, 1, 5],
          [4, 2, 8],
          [4, 3, 117],
          [4, 4, 115],
          [4, 5, 70],
          [4, 6, 70],
          [5, 0, 88],
          [5, 1, 32],
          [5, 2, 12],
          [5, 3, 6],
          [5, 4, 120],
          [5, 5, 70],
          [5, 6, 70],
          [6, 0, 13],
          [6, 1, 44],
          [6, 2, 88],
          [6, 3, 98],
          [6, 4, 96],
          [6, 5, 70],
          [6, 6, 70],
        ],
        // dataLabels: {
        //   enabled: true,
        //   color: "#000000",
        // },
      },
      {
        type: "pie",
        name: undefined,
        data: [
          {
            name: "Jane",
            y: 13,
            color: Highcharts.getOptions().colors[0], // Jane's color
          },
          {
            name: "John",
            y: 23,
            color: Highcharts.getOptions().colors[1], // John's color
          },
          {
            name: "Joe",
            y: 19,
            color: Highcharts.getOptions().colors[2], // Joe's color
          },
        ],
        center: [112, 30],
        size: 30,
        showInLegend: false,
        dataLabels: {
          enabled: false,
        },
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            yAxis: {
              labels: {
                formatter: function () {
                  return this.value.charAt(0);
                },
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div style={{ padding: "40px" }}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}
