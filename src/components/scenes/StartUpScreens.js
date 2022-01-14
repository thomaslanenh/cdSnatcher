import { useState, useContext } from "react";
import { Context } from "../../Store";
import "../styles/StartUpScreens.scss";

const menuSelect = new Audio('/music/mainmenuselect.mp3');


export default function StartUpScreen() {

    const [state,dispatch] = useContext(Context);

    

    const musicPlayer = () => {
       menuSelect.play();

       setTimeout(function(){
        dispatch({type: 'CHANGE_SCENE', payload: 'mainmenu'});
        
       },3000)
       

    }

  return (
    <div className="startUp">
      <p>The story, characters,<br/> and events, in this game<br/> are entirely fictional. <br/>Any similarities to<br/> actual people, places<br/> and events are entirely<br/> coincidental.</p>
      <a onClick={e=>musicPlayer()}>Press to Continue</a>
    </div>
  );
}
