import { Chart } from "react-google-charts";
import * as React from "react";

export const Combo = () => {

return <Combo   initialState={{ chartEditor: null, chartWrapper: null, google: null }}  >
  {RandVar => {
    return (
      <div>
        <button
          onClick={() => {
            const { google, chartEditor, chartWrapper } = RandVar.state
            if (
              chartWrapper === null ||
              google === null ||
              chartEditor === null
            )
              return
            chartEditor.openDialog(chartWrapper)
            google.visualization.events.addListener(chartEditor, 'ok', () => {
              const newChartWrapper = chartEditor.getChartWrapper()
              newChartWrapper.draw()
              const newChartOptions = newChartWrapper.getOptions()
              const newChartType = newChartWrapper.getChartType()
              console.log('Chart type changed to ', newChartType)
              console.log('Chart options changed to ', newChartOptions)
            })
          }}
        >
          Edit data
        </button>
        <Chart
          width={'600px'}
          height={'400px'}
          chartType="ScatterChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Age', 'Weight'],
            [8, 12],
            [4, 5.5],
            [11, 14],
            [4, 5],
            [3, 3.5],
            [6.5, 7],
          ]}
          options={{
            title: 'Age vs. Weight comparison',
            hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
            vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
            legend: 'none',
          }}
          rootProps={{ 'data-testid': '1' }}
          getChartEditor={({ chartEditor, chartWrapper, google }) => {
            Combo.setState({ chartEditor, chartWrapper, google })
            console.log('Get Chart Editor')
          }}
          chartPackages={['corechart', 'controls', 'charteditor']}
        />
      </div>
    )
  }}
</Combo>

};