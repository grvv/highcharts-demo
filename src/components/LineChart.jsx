import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const data = [1, 2, 3, 4, 5, 6, 7];
const optionsEnum = [
  "Significantly Worse",
  "Moderately Worse",
  "Slightly Worse",
  "Similar",
  "Slightly Better",
  "Moderately Better",
  "Significantly Better",
];

const plotLinesArr = [0, 1, 2, 3, 4, 5, 6, 7].map((position) => ({
  dashStyle: "ShortDot",
  value: position,
  color: "#E6E6FF",
}));

export function LineChart() {
  const chartOptions = {
    xAxis: [
      {
        // min: 0,
        // max: 7,
        plotLines: plotLinesArr,
        opposite: true,
        gridLineDashStyle: "ShortDot",
        categories: optionsEnum,
      },
      {
        // min: 0,
        // max: 7,
        lineWidth: 1,
        opposite: false,
        title: undefined,
      },
    ],
    yAxis: [
      {
        // min: 0,
        // max: 7,
        lineWidth: 1,
        title: undefined,
        opposite: false,
        tickInterval: 1,
        // labels: {
        //   useHTML: true,
        //   formatter: function () {
        //     const label = this.axis.defaultLabelFormatter.call(this);

        //     return optionsEnum[label];
        //   },
        //   // style: {
        //   //   "word-break": "break-all", //break-word
        //   //   "text-overflow": "ellipsis",
        //   //   width: "80px",
        //   // },
        // },
        gridLineDashStyle: "ShortDot",
        // gridLineDashStyle: 'Dot'
      },
      {
        lineWidth: 1,
        opposite: true,
        title: undefined,
      },
    ],
    series: [
      { type: "scatter", data },
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
        center: [10, 15],
        size: 20,
        showInLegend: false,
        dataLabels: {
          enabled: false,
        },
      },
    ],
    // series: [{ data: [0, 1, 2, 3, 4, 5, 6] }],
  };

  return (
    <div style={{ padding: "40px" }}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}
