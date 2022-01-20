import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export function LineChart() {
  const chartOptions = {
    xAxis: {
      categories: ["A", "B", "C"],
    },
    series: [{ data: [1, 2, 3] }],
  };

  return (
    <div style={{ padding: "40px" }}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}
