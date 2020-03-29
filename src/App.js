// https://www.highcharts.com/demo

import React from "react";
import SimpleChart from "./SimpleChart";
// for maps check https://code.highcharts.com/mapdata/
import Map from "./Map.js";
import mapData from "./mapData.js";
import Highcharts from "highcharts/highstock";
import ComplexChart from "./ComplexChart.js";
import Pie from "./Pie";
import Bar from "./Bar";
import InvertedBar from "./InvertedBar";
import TripleBar from "./TripleBar";
import DynamicLine from "./DynamicLine";
import D3Pie from "./3DPie";

import "bootstrap/dist/css/bootstrap.min.css";

// Load Highcharts modules
require("highcharts/indicators/indicators")(Highcharts);
require("highcharts/indicators/pivot-points")(Highcharts);
require("highcharts/indicators/macd")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);

const mapOptions = {
  title: {
    text: ""
  },
  colorAxis: {
    min: 0,
    stops: [
      [0, "red"],
      [0.67, "blue"],
      [1, "green"]
    ]
  },
  series: [
    {
      mapData: mapData,

      name: "Norway",
      data: [
        ["dk", 0],
        ["fo", 1],
        ["hr", 2],
        ["nl", 3],
        ["ee", 4],
        ["bg", 5],
        ["es", 6],
        ["it", 7],
        ["sm", 8],
        ["va", 9],
        ["tr", 10],
        ["mt", 11],
        ["fr", 12],
        ["no", 13],
        ["de", 14],
        ["ie", 15],
        ["ua", 16],
        ["fi", 17],
        ["se", 18],
        ["ru", 19],
        ["gb", 20],
        ["cy", 21],
        ["pt", 22],
        ["gr", 23],
        ["lt", 24],
        ["si", 25],
        ["ba", 26],
        ["mc", 27],
        ["al", 28],
        ["cnm", 29],
        ["nc", 30],
        ["rs", 31],
        ["ro", 32],
        ["me", 33],
        ["li", 34],
        ["at", 35],
        ["sk", 36],
        ["hu", 37],
        ["ad", 38],
        ["lu", 39],
        ["ch", 40],
        ["be", 41],
        ["kv", 42],
        ["pl", 43],
        ["mk", 44],
        ["lv", 45],
        ["by", 46],
        ["is", 47],
        ["md", 48],
        ["cz", 49]
      ]
    }
  ]
};

function App() {
  return (
    <div className="App" style={{ marginTop: "50px" }}>
      Demo Under: https://www.highcharts.com/demo/
      <div className="d-flex bd-highlight">
        <div className="flex-fill bd-highlight">
          <ComplexChart />
        </div>
        <div className="flex-fill bd-highlight">
          <SimpleChart />
        </div>
      </div>
      <div className="d-flex bd-highlight">
        <div className="flex-fill bd-highlight">
          <Pie />
        </div>
        <div className="flex-fill bd-highlight">
          <Map options={mapOptions} highcharts={Highcharts} />
        </div>
      </div>
      <div className="d-flex bd-highlight">
        <div className="flex-fill bd-highlight">
          <Bar />
        </div>
        <div className="flex-fill bd-highlight">
          <InvertedBar />
        </div>
      </div>
      <div className="d-flex bd-highlight">
        <div className="flex-fill bd-highlight">
          <TripleBar />
        </div>
        <div className="flex-fill bd-highlight">
          <InvertedBar />
        </div>
      </div>
      <div className="d-flex bd-highlight">
        <div className="flex-fill bd-highlight">
          <DynamicLine />
        </div>
        <div className="flex-fill bd-highlight">
          <D3Pie />
        </div>
      </div>
    </div>
  );
}

export default App;
