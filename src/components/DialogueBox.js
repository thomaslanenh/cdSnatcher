import './styles/DialogueBox.scss';
import { useState, useEffect } from 'react';

export default function DialogueBox(params){


    const [dialogue, setDialogue] = useState("");
    const [index, setIndex] = useState(0);
    const letterArray = params.text.split(/\b/);
  
    const handleChangeValue = () => {
        if (letterArray[index] !== undefined){
            setDialogue((dialogue) => dialogue + letterArray[index]);
        }
    };

    useEffect(()=> {
        const interval = setInterval(()=> {
            if (index < letterArray.length){
                setIndex((index) => index + 1);
            }
        }, 300);
        return () => clearInterval(interval);
    });

    useEffect(()=> {
        handleChangeValue();
    }, [index]);


    return (
        <div className="dialogueBox">
        
            <p>{dialogue}</p>
        </div>
    )
}