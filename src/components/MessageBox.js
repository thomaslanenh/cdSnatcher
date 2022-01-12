import './styles/MessageBox.scss';
import {useContext, useState} from 'react';
import {Context} from '../Store';

let mainMenuMusic = new Audio("/music/snatcher-sega-cd.mp3");

export default function MessageBox(props){

    const [state, dispatch] = useContext(Context);
    const [playing, setPlaying] = useState(false);
    const [fade, setFade] = useState(false);

    let message = props.message;

    const playSong = () => {
        if (playing === false){
            mainMenuMusic.play();
        }
        else {
            mainMenuMusic.pause();
        }

        setPlaying(!playing);
    }

    const changeGameStatus = (scene) => {

        setFade(true);
        var fadeAudio = setInterval(() => {
            if (state.gamestatus==="mainmenu"){
                if (mainMenuMusic.volume != 0){
                    mainMenuMusic.volume -= 0.1;
                }
                
                if (mainMenuMusic.volume === 0.0){
                    clearInterval(fadeAudio);
                }
            }
            else{
                mainMenuMusic.pause();
            }
        }, 300)
        
        
        setTimeout(()=> dispatch({type: scene.toString()}), 3000);
 
      }

    return(
        <div className={fade ? 'messageBox hidden' : 'messageBox'}>
            <h1>{message}</h1>
            {state.gamestatus=== 'mainmenu'? <img className="audioPlayer" src="../volume.png" alt="Play Music" onClick={()=> playSong()}/> : null} <br/>
            {state.gamestatus === 'mainmenu' ? <button onClick={()=>changeGameStatus("SCENE_1")}>Start Game</button> : <></>}

        </div>
    )
}