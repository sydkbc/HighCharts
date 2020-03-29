import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "Simple Chart"
  },
  series: [
    {
      data: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        55091,
        55123,
        55137,
        55149,
        55150,
        55156,
        55160,
        55161,
        55163,
        55171,
        55185,
        55208,
        55222,
        55228,
        55241,
        55261,
        55262,
        55273,
        55281,
        55282,
        55291,
        55298,
        55323,
        55342,
        55347,
        55349,
        55372,
        55375,
        55377,
        55381,
        55394,
        55396,
        55411,
        55412,
        55440,
        55457,
        55463,
        55470,
        55475
      ]
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
