import React from 'react';
import '../css/Display.css';
import Time from '../lib/Time';

const Display = (props) => {
    const time = new Time();
    
    return(
        <div className="display" style={{position: "relative"}}>
            
            {
                props.clicked === 'started'
                && 
                <div className="displayTime align-self-center" 
                     style={{position:"absolute",top:100,color: props.currentTime<=10000?'#FE5C5C' : ''}}>
                        {time.getTimeDisplay(props.currentTime)} 
                </div>
            }
            {
                props.clicked !== 'started'
                &&
                <div className="d-flex flex-column">
                    <div className="text-info h6 align-self-center" 
                         style={{position:"absolute",top:60}}>
                            {time.getTimeDisplay(props.currentTime)}
                    </div>
                    <input className="displayTime align-self-center" 
                           style={{position:"absolute",top:100}}
                           maxLength={6} 
                           value={props.timeInput} 
                           onChange={props.handleChange} 
                        />
                </div>
            }

            <div style={{position:'absolute',bottom:0,left:'-10px'}}>
                {props.children}
            </div>
    
        </div>
    )
}

export default Display;