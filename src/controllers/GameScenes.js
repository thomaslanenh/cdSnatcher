import { useContext, useState } from "react";
import {Context} from '../Store';
import MessageBox from "../components/MessageBox";
import Card from '../components/Card';
import Intro from "../components/scenes/IntroCutscene";



export const MainMenu = () => {
    const [state,dispatch] = useContext(Context);
  return <MessageBox message="CD SNATCHER" />;
};

export const IntroScene = () => {
    const [state,dispatch] = useContext(Context);
  return <Intro />;
};

export const BattleScreen = () => {
    const [state,dispatch] = useContext(Context);
  return <></>;
};

export const StartGame = () => {
    const [state,dispatch] = useContext(Context);
  return (
    <>
      <MessageBox message="START GAME" />
      <Card cards={state.cardsheld}/>
    </>
  );
};

export const GameOver = () => {
    return (
        <p>Game Over</p>
    )
}
