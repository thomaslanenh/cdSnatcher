import {useState, useContext} from 'react';
import BattleScene from '../BattleScene';

export default function FirstBattle (params)  {
    return (
        <>
        <BattleScene enemy={['snatcher', 'snatcher']}/>
        </>
    )
}