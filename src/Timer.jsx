import React,{Component} from 'react';
import Display from './Display.jsx';
import Control from './Control.jsx';

class Timer extends Component {

    static initialState = () => ({
        timeInput: 0,   // input time in seconds
        currentTime : 0, // input time in milliseconds
        clicked : null
    })

    state = Timer.initialState();

    timeInterval;

    handleChange = (e) => {
        this.setState({
            timeInput: e.target.value,
            currentTime: e.target.value * 1000,
        })
    }

    tick = () => {

        this.setState({
            timeInput : Math.floor(this.state.currentTime/1000),
            currentTime : this.state.currentTime - 10
            
        })

        if (this.state.currentTime < 0) {
            clearInterval(this.timeInterval);
            this.setState(Timer.initialState());
        }
    }
    
    startCount = () => {
        this.setState({clicked : 'started'})
        this.timeInterval = setInterval(this.tick,10);
    }

    resetCount = () => {
        clearInterval(this.timeInterval);
        this.setState(Timer.initialState());
    }

    stopCount = () => {
        clearInterval(this.timeInterval);
        this.setState({clicked: 'stopped'})
    }

    render(){
        return(
            <div>
                <Display 
                    clicked={this.state.clicked}
                    currentTime={this.state.currentTime}
                    timeInput={this.state.timeInput} 
                    handleChange={this.handleChange}
                >
                <div>
                    <Control 
                        clicked={this.state.clicked}
                        handlePlay={this.startCount}
                        handleStop={this.stopCount}
                        handleReset={this.resetCount}
                    />
                </div>
                </Display>
            </div>
        )
    }
}

export default Timer;