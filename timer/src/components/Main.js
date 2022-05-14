import React from "react";
import Countdown from "./Countdown";
import StopWatch from "./StopWatch";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      showStopwatch: false,
      showCountDown: false,
    }
  }

  handleShowStopwatch = () => {
    this.setState({ showStopwatch: !this.state.showStopwatch })
  }
  
  handleShowCountDown = () => {
    this.setState({ showCountDown: !this.state.showCountDown })
  }

  render() {
    return (
      <div className="container">
        <h1>🚀  Timers  🚀</h1>
        <div className="timer-watch-holder">
          {
            this.state.showStopwatch 
              ? <StopWatch handleShowStopwatch={ this.handleShowStopwatch } /> 
              : <button className="btn" onClick={ this.handleShowStopwatch }
            >Show StopWatch</button>
          }
          {
            this.state.showCountDown 
              ? <Countdown handleShowCountDown={ this.handleShowCountDown }/> 
              : <button className="btn" onClick={ this.handleShowCountDown }
            >Show Countdown</button>
          } 
        </div>
      </div>

    )
  }
}

export default Main;