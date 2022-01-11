import DialogueBox from '../DialogueBox';
import scriptdata from './dialogue/dialogue.json';
import { Context } from "../../Store";
import { useContext } from 'react';

const timer = ms => new Promise(res => setTimeout(res,ms));

export default function Intro(params){

    const [state, dispatch] = useContext(Context);

    Object.keys(scriptdata.introDialogue).map(e=>console.log("Data: " + scriptdata.introDialogue[e].text));

    return (
            <>
                <DialogueBox text={scriptdata.introDialogue[state.currentdialogue].text}/>
            </>
        )
}