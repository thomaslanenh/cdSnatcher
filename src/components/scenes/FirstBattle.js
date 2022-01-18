import { useState, useEffect, useContext } from "react";
import { Context } from "../../Store";

import * as GameScene from "../../controllers/GameScenes";

export default function FirstBattle(props){

  const [state, dispatch] = useContext(Context);

  

  useEffect(() => {
    
      dispatch({type: 'SET_ENEMY_HEALTH', payload: 600})
   
  },[])

  return <>
    <GameScene.BattleScreen enemy={['snatcher', 'snatcher']} nextscene="firstscene"/>
  </>;
}
