import './styles/MessageBox.scss';
import {useContext, useState, useRef, useEffect} from 'react';
import {Context} from '../Store';

let mainMenuMusic = new Audio("/music/snatcher-sega-cd.mp3");

export default function MessageBox(props){
    const [isRunning, setRunning] = useState(false);

    function useInterval(callback, delay) {
        const savedCallback = useRef();
      
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
    }

    useInterval(() => {
        console.log(mainMenuMusic.volume);
        if (state.gamestatus === "mainmenu") {
            if (mainMenuMusic.volume !== 0) {
                mainMenuMusic.volume -= 0.1;
                // mainMenuMusic.pause();
            }

            if (mainMenuMusic.volume < 0.2){
                mainMenuMusic.volume -= 0.1;
            }


        } else {
            mainMenuMusic.pause();
        }
    }, isRunning ? 300 : null);

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

   function changeGameStatus(scene) {

        setFade(true);
        
        setRunning(true);
        

        setTimeout(()=> dispatch({type: scene.toString()}), 3000);
 
      }

    return(
        <div className={fade ? 'messageBox hidden' : 'messageBox'}>
            <h1>{message}</h1>
            {state.gamestatus=== 'mainmenu'? <img className="audioPlayer" src="../volume.png" alt="Play Music" onClick={()=> playSong()}/> : null} <br/>
            {state.gamestatus === 'mainmenu' ? <button onClick={()=>changeGameStatus("BATTLE_SCENE")}>Start Game</button> : <></>}
        </div>
    )
}