import './styles/DialogueBox.scss';
import { useState, useEffect, useContext } from 'react';
import {Context} from '../Store';

export default function DialogueBox(params){
    const [state, dispatch] = useContext(Context);

    const letterArray = params.text.split(/\b/);

    const handleChangeValue = () => {
        
        if (letterArray[state.letterindex] !== undefined){
            dispatch({
                type: "CHANGE_DIALOGUE",
                payload: state.dialogue + letterArray[state.letterindex]
            })

            console.log("Dialogue is: " + state.dialogue)
        }
    };

   
    useEffect(()=> {
        const interval = setInterval(()=> {
           
            if (state.letterindex < letterArray.length){
                const newValue = state.letterindex + 1;
                dispatch({type: "CHANGE_DIALOGUE_INDEX", payload: parseInt(newValue)})
            }
        }, 300);
        return () => clearInterval(interval);
    });

    useEffect(() => {
        handleChangeValue();
    },[state.letterindex])
    
    
    return(
        <div className="dialogueBox">
            {console.log("Dialogue: " + state.dialogue)}
            <p>{state.dialogue}</p>
        </div>
    )
}
