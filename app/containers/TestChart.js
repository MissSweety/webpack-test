import React from 'react';
import SearchBox from '../components/SearchBox';
import '../style.scss';
import ChartTest from '../components/ChartTest';

class TestChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 2};
  }
  componentDidMount() {
    console.log('in testCon componentDidMount');
    this.setState({ number: 3 });
    console.log(this.state);
  }
  componentDidUpdate() {
    console.log('in testCon componentDidUpdate');
    console.log(this.state);
  }
  render() {
    console.log('in testcon render:');
    console.log(this.state);
    return (
      <div className="container">
        <section>
          {/* <h1 className="jumbotron-heading">another con</h1>
          <SearchBox
            keyword={'abc'}
            searchType="input"
            handleChange={(name) => {
              this.setState({ number: 4});

              console.log(name);
            }}
            sendAction={(name) => {
              // throw new Error('omg');
              this.setState({ number: 5});
              console.log(this.state);
            }}
          /> */}
          <div className="chart-con"><ChartTest /></div>
        </section>
      </div>
    );
  }
}

export default TestChart;