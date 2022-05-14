import React from "react";

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      isStopped: false,
      milliseconds: 0,
    }
    this.timer = null;
  }

  handleStart = () => {
    this.setState({ isStarted: !this.state.isStarted });
    this.timer = setInterval(() => {
      this.setState({ milliseconds: this.state.milliseconds + 1 });
    }, 10);
  }

  handleStop = () => {
    this.setState({ isStopped: !this.state.isStopped });
    clearInterval(this.timer);
  }

  handleReset = () => {
    this.setState({ isStarted: false, isStopped: false, milliseconds: 0 });
    clearInterval(this.timer);
  }


  handleResume = () => {
    this.setState({ isStopped: !this.state.isStopped });
    this.timer = setInterval(() => {
      this.setState({ milliseconds: this.state.milliseconds + 1 });
    }, 10);
  }


  render() {
    return (
      <div className="stop-watch">
        <span onClick={() => { 
          this.handleReset()
          this.props.handleShowStopwatch() 
        }} className="cross">X</span>
        <h2 className="stopwatch-header">Stopwatch</h2>
        <div className="stopwatch-display">
          <span className="hours">
            { this.state.milliseconds ? "0" + Math.floor(( this.state.milliseconds / 360000) % 60 ) + " : " : " 00 :" }
          </span>
          <span className="minutes">
            { this.state.milliseconds ? "0" + Math.floor(( this.state.milliseconds / 6000 ) % 60 ) + " : "  : " 00 :"}
          </span> 
          <span className="seconds">
            { this.state.milliseconds ?  Math.floor(( this.state.milliseconds / 100 ) % 60  ) + " : " : " 00 :"}
          </span>
          <span className="milliseconds">
            { this.state.milliseconds ?  Math.floor( this.state.milliseconds % 100 ) : " 00"}
          </span>
        </div>
        {
          !this.state.isStarted 
            ? <button onClick={ this.handleStart } className="btn">Start</button>
            : !this.state.isStopped 
              ? <button onClick={ this.handleStop } className="btn">Stop</button>
              : <div>
                  <button onClick={ this.handleResume } className="btn">Resume</button>
                  <button onClick={ this.handleReset } className="btn">Reset</button>
                </div> 
        }
      </div>
    )
  }
}

export default StopWatch;
