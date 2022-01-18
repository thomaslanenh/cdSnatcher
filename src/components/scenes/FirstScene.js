import {useState, useContext} from 'react'
import { Context } from '../../Store';
import scriptdata from '../scenes/dialogue/dialogue.json';
import DialogueBox from '../DialogueBoxReducer';

export default function FirstScene (){

    const [state, dispatch] = useContext(Context);

    return (
        <>
        <p>TEST</p>
        <DialogueBox text={scriptdata.scene1[parseInt(state.currentdialogueindex)].text} xLoc="center" yLoc="center" color="blue" nextstate="secondbattle"/>
        </>
    )
}