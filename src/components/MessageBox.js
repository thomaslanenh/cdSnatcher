import './styles/MessageBox.scss';
import {useContext} from 'react';
import {Context} from '../Store';
import ReactAudioPlayer from 'react-audio-player';



export default function MessageBox(props){

    let mainMenuMusic = new Audio("/music/snatcher-sega-cd.mp3");

    const [state, dispatch] = useContext(Context);

      
    let message = props.message;

    const changeGameStatus = (scene) => {
        if (state.gamestatus==="mainmenu"){
            if (mainMenuMusic.volume > 0){
                mainMenuMusic.volume -= .5;
            }else {
                mainMenuMusic.pause();
            }    
        }
        else{
            mainMenuMusic.pause();
        }
        
        dispatch({type: scene.toString()});
      }

    return(
        <div className="messageBox">
            <h1>{message}</h1>
            {state.gamestatus=== 'mainmenu'? <img className="audioPlayer" src="../volume.png" alt="Play Music" onClick={()=> mainMenuMusic.play()}/> : null} <br/>
            {state.gamestatus === 'mainmenu' ? <button onClick={()=>changeGameStatus("SCENE_1")}>Start Game</button> : <></>}

        </div>
    )
}