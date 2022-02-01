import React from "react";
import { VictoryChart, VictoryBar } from "victory";

class ExampleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        data: this.getData(),
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData() {

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }

    const randomNum = getRandomInt(6, 10);
    var bars = [];
    for(var i = 0; i <= randomNum ; i++){
      bars.push(i)
    }
    return bars.map((bar) => {
      return { x: bar + 1, y: getRandomInt(2, 10) };
    });
  }

  render() {
    return (
      <VictoryChart domainPadding={{ x: 20 }} animate={{ duration: 500 }}>
        <VictoryBar
          data={this.state.data}
          style={{
            data: { fill: "#E78598", width: 12 },
          }}
          animate={{
            onExit: {
              duration: 500,
              before: () => ({
                _y: 0,
                fill: "orange",
              }),
            },
          }}
        />
      </VictoryChart>
    );
  }
}

export default ExampleChart;
