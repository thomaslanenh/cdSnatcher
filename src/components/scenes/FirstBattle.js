import { useState, useContext } from "react";

import * as GameScene from "../../controllers/GameScenes";

export default function FirstBattle(props){
  return <>
    <GameScene.BattleScreen enemy={['snatcher', 'snatcher']} enemyhealth={400}/>
  </>;
}
