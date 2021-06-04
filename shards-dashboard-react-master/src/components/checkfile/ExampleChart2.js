import { Chart } from "react-google-charts";
import * as React from "react";


const chartype1 = 'ScatterChart'
const  options1 = {
    title: "Age vs. Weight comparison",
    hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
    vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
    legend: "none"
  };
    
    const data1 = [
   ["Age", "Weight"],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7]
  ];

  export const ExampleChart2 = () => {
    return (
      <Chart
        chartType= {chartype1}
        data={data1}
        options={options1}
        width="600px"
        height="600px"
        legendToggle
      />
    );
  };