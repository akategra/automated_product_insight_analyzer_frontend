import { Chart } from "react-google-charts";
import * as React from "react";
import { useSelector } from 'react-redux';
// import { render } from "react-dom";


const chartype = 'PieChart'
const options={
    title: 'My Daily Activities',
  }
var data = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ];





export const ExampleChart = () => {




  const reviews = useSelector(state => state.reviews);
  // alert(reviews);
  var tempdata = reviews
  var num1 = 0
  var i = 0

  tempdata.forEach(element => {
    console.log(element.feature+" "+element.scores)
    for (let i = 0; i < element.scores.length; i++) {
      num1 = num1+element.scores[i];
      console.log(num1)
    }
    i++;
  });



  return (
    <Chart
      chartType= {chartype}
      data={data}
      options={options}
      width="600px"
      height="600px"
      legendToggle
    />
  );
};