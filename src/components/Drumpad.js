import React, { useEffect, useState } from 'react';

let Drumpad = (props) => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        document.addEventListener('keydown', keydownPlay);
        
        return () => {
            document.removeEventListener('keydown', keydownPlay)
        }
        
    })

    let keydownPlay = e => {
        if(e.keyCode === props.clip.keyCode) {
            playSound();
        }
    }

    let playSound = () => {
        props.setText(props.clip.id);
        const audioTag = document.getElementById(props.clip.keyTrigger)
        audioTag.volume = props.volumeVal;
        audioTag.currentTime = 0;
        audioTag.play();
        setActive(true)
        setTimeout(() => {
            setActive(false);
        }, 200)
        
    }
    

    return (
        
        <div 
            className={`drum-pad btn p-2   ${active ? 'btn-active' : 'btn-primary'}`}
            id={props.clip.id}
            onClick={playSound}
        >
            <audio 
                id={props.clip.keyTrigger}
                src={props.clip.url}  
                className='clip'
                
            />
            {props.clip.keyTrigger}
        </div>
        
    )
}


export default Drumpad