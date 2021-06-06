import React from 'react';


let Display = (props) => {


let setVol = (e) => {
    props.changeVolumeVal(e.target.value);
}  
   

    return (
        <div id='display' className='text-center'>
            <h1 className='title'>{props.text}</h1>

            
            <div className='drum-control-bank'>
                
                <div className='label'>{props.displayBankName}</div>
                <label className='switch' title='Switch bank'>
                <input 
                    type='checkbox' 
                    onChange={props.changeBank} 

                />
                <span className='slider round'></span>
                </label>
            </div>

            <div className='drum-control-volume'>
                
                <label htmlFor="volume-control" className="label">Volume<span>: {Math.floor(props.volumeVal * 100)}%</span></label>
                <input 
                    type="range" 
                    className="range-input" 
                    min='0' max='100' 
                    onChange={setVol} 
                    value={props.volumeVal * 100} 
                    id="volume-control" 
                
                />

            </div>

        </div>
            
            
        
    )
}

export default Display