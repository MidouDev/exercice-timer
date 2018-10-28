import React from 'react';
import '../css/Control.css';

const Control = (props) => (
    <div className="">
        <div className="d-flex flex-row">
            <div className="">
                <div className="controls btn-group">
                    {
                        props.clicked !== "started" 
                        ?
                        <button className="btn btn-lg btn-success" 
                                onClick={props.handlePlay} 
                                disabled={props.currentTime===0} >
                            <div className="text-right">
                                <i className="fa fa-play fa-2x mr-2 mb-3"></i>
                            </div>
                        </button>
                        :
                        <button className="btn btn-lg btn-dark" onClick={props.handleStop} >
                            <div className="text-right">
                                <i className="fa fa-stop fa-2x mr-2 mb-3"></i>
                            </div>
                        </button>
                    }
                    
                    <button className="btn btn-lg btn-primary" onClick={props.handleReset} >
                        <div className="text-left">
                            <i className="fa fa-refresh fa-2x ml-2 mb-3"></i>
                        </div>
                    </button>
                </div>
            </div>     
        </div>
    </div>
)

export default Control;