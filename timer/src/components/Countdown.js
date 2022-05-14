import React from "react";

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isStarted: false,
      isStopped: false,
      time: 0,
    }
    this.timer = null;
    this.timeout = null;
  }

  handleStart = () => {
    this.setState({ isStarted: !this.state.isStarted });
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
    }, 1000);

    this.timeout = setTimeout(() => {
      alert("time out");
      clearInterval(this.timer);
      this.setState({ time: 0, isStarted: false, isStopped: false })
    }, this.state.time * 1000 )
  }

  handleStop = () => {
    this.setState({ isStopped: !this.state.isStopped });
    clearInterval(this.timer);
    clearTimeout(this.timeout);
  }

  handleReset = () => {
    this.setState({ isStarted: false, isStopped: false, time: 0 });
    clearInterval(this.timer);
  }

  handleResume = () => {
    this.setState({ isStopped: !this.state.isStopped });
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
    }, 1000);

    this.timeout = setTimeout(() => {
      alert("time out");
      clearInterval(this.timer);
      this.setState({ time: 0, isStarted: false, isStopped: false })
    }, this.state.time * 1000 )
  }

  handleIncrement = (value) => {
    switch(value) {
      case "hours" :
        return this.setState({ time: this.state.time + 3600 });
        break;
      case "minutes" :
        return this.setState({ time: this.state.time + 60 });
        break;
      case "seconds" :
        return this.setState({ time: this.state.time + 1 });
        break;
    }
  }

  handleDecrement = (value) => {
    switch(value) {
      case "hours" :
        return this.setState({ time: this.state.time - 3600 < 0 ?  this.state.time - 0 : this.state.time - 3600 });
        break;
      case "minutes" :
        return this.setState({ time: this.state.time - 60 < 0 ?  this.state.time - 0 : this.state.time - 60  });
        break;
      case "seconds" :
        return this.setState({ time: this.state.time - 1 < 0 ?  this.state.time - 0 : this.state.time - 1  });
        break;
    }
  }

  render() {
    return (
      <div className="timer">
        <span onClick={() => { 
          this.handleReset();
          this.props.handleShowCountDown() 
        }} className="cross">X</span>
        <h2 className="countdown-header">Countdown</h2>
        <h3 className="countdown-label">
          Hours : Minutes : Seconds
        </h3>
        <div className="countdown-display">
          <button onClick={() => this.handleIncrement("hours") } className="inc-btn">⬆</button>
          <button onClick={() => this.handleIncrement("minutes") } className="inc-btn">⬆</button>
          <button onClick={() => this.handleIncrement("seconds") } className="inc-btn">⬆</button>
          <h2 className="countdown-time">
            <span className="hours">
              { this.state.time > 0 ? "0" + Math.floor(( this.state.time / 3600) % 60 ) + " : " : " 00 :" }
            </span>
            <span className="minutes">
              { this.state.time > 0 ? "0" + Math.floor(( this.state.time / 60 ) % 60 ) + " : "  : " 00 :"}
            </span> 
            <span className="seconds">
              { this.state.time > 0 ?  Math.floor( this.state.time % 60  )  : " 00"}
            </span>
          </h2>
          <button onClick={() => this.handleDecrement("hours") } className="dec-btn">⬇</button>
          <button onClick={() => this.handleDecrement("minutes") } className="dec-btn">⬇</button>
          <button onClick={() => this.handleDecrement("seconds") } className="dec-btn">⬇</button>
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

export default Countdown;