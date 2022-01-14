import { useState, useEffect, useContext } from "react";
import { Context } from "../Store";
import Cards from "./Card";
import EnemyCards from './EnemyCard';
import card_data from "./cards/cards.json";
import './styles/BattleScene.scss';


export default function BattleScene(params) {

    const [state, dispatch] = useContext(Context);

    const [turn, setTurn] = useState(0);

    let [playerhealth, setPlayerHealth] = useState(parseInt(state.playerlife));

    const [enemyCardHealth, setEnemyCardHealth] = useState(0);

    useEffect(()=>{
        for (let value of params.enemy){
            console.log('key: ' + value);
            return setEnemyCardHealth(enemyCardHealth + parseInt(card_data[value].hp));

        }
    }, [])

    return (
    <>
    <div className="battleScene">
        <div className="playerHealth">
            <h2>{playerhealth}</h2>
        </div>
        <div className="battleRow1">
           {params.enemy ? <EnemyCards enemy={params.enemy}/> : null}
        </div>
        <div className="battleField">
            <p>BATTLEFIELD HERE</p>
        </div>
        <div className="battleRow2 flex-container">
            <Cards cards={state.cardsheld} />
        </div>
    </div>
    </>
  );
}
