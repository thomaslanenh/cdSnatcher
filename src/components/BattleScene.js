import { useState, useContext } from "react";
import { Context } from "../Store";
import Cards from "./Card";
import './styles/BattleScene.scss';

export default function BattleScene(params) {
    console.log(params)
  const [state, dispatch] = useContext(Context);

  const [turn, setTurn] = useState(0);

  const [playerhealth, setPlayerHealth] = useState(parseInt(parseInt(state.playerlife)));

  return (
    <>
    <div className="battleScene">
        <div className="battleRow1">
            <h2>{playerhealth}</h2>
           {params.enemy ? <Cards cards={params.enemy}/> : null}
        </div>
        <div className="battleRow2 flex-container">
            <Cards cards={state.cardsheld} />
        </div>
    </div>
    </>
  );
}
