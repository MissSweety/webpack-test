import React from 'react';
import 'react-vis/dist/style.css';

import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis  } from 'react-vis';

class ChartTest extends React.Component {
  render() {
    const data = [
      { x: 0, y: 1},
      { x: 1, y: 11},
      { x: 2, y: 12},
      { x: 3, y: 21},
      { x: 4, y: 31},
      { x: 5, y: 11},
      { x: 6, y: 119},
    ];
    return (
      <div>
        <XYPlot height={300} width={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }

}

export default ChartTest;
