import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    inverted: true,
    polar: false
  },
  title: {
    text: "Inverted Bar"
  },

  subtitle: {
    text: "Information on the Bar"
  },

  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  },

  series: [
    {
      type: "column",
      colorByPoint: true,
      data: [
        29.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        95.6,
        54.4
      ],
      showInLegend: false
    }
  ]
};

function SimpleChart() {
  return (
    <div className="SimpleChart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default SimpleChart;
