import { useState, useEffect, useContext } from "react";
import { Context } from "../Store";
import Cards from "./Card";
import EnemyCards from './EnemyCard';
import card_data from "./cards/cards.json";
import './styles/BattleScene.scss';


export default function BattleScene(params) {

    console.log('next scene is: ' + params.nextscene);
    const [state, dispatch] = useContext(Context);

    const [enemyCardHealth, setEnemyCardHealth] = useState(0);

    useEffect(()=>{
        for (let value of params.enemy){
            console.log('key: ' + value);
            return setEnemyCardHealth(enemyCardHealth + parseInt(card_data[value].hp));
        }
    }, [])

    useEffect(()=>{
        if (state.enemyhealth === 0){
            dispatch({type: 'CHANGE_SCENE', payload: params.nextscene})
        }
    })

    return (
    <>
    <div className="battleScene">
        <div className="enemyHealth">
            <h2>Enemy Health: {state.enemyhealth}</h2>
        </div>
        <div className="battleRow1">
           {params.enemy ? <EnemyCards enemy={params.enemy}/> : null}
        </div>
        {/* <div className="battleField">
            
        </div> */}
        <div className="battleRow2 flex-container">
            <Cards cards={state.cardsheld} />
        </div>
        <div className="playerHealth">
            <h2>Player Health: {state.playerlife}</h2>
        </div>
    </div>
    </>
  );
}
