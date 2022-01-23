import {useState, useEffect, useContext} from "react";
import { Context } from "../Store";
import card_data from './cards/cards.json';
import TripleCard from "./TripleCard";
import {useDrag, useDrop} from 'react-dnd';
import './styles/TestBattle.scss';
import { ItemTypes } from "./Constants";
import Square from "./board/Square";

export default function TestBattle() {
    const [state, dispatch] = useContext(Context);
    const [isFirstCard, setIsFirstCard] = useState(true);
    const currentHand = state.playinghand;
    
    // if array of all 9 positions has a card in position x, put <TripleCard/> in that location with a param call to the specific card
    return(
        <div className="gameScene">
            <div className="leftHand">
                ENEMY HAND
            </div>
            <div className="gameBoard">
                <div className="battleBoard">
                    <Square title="square1" className="card1" card={state.cardsactive['square1'] !== "" ? state.cardsactive['square1'] : 'gillian'}>
                        {state.cardsactive['square1'] && <TripleCard card={state.cardsactive['square1']}/>}
                    </Square>
                    <Square title="square2" className="card2">
                        {state.cardsactive['square2'] && <TripleCard card={state.cardsactive['square2']}/>}
                    </Square>
                    <Square title="square3" className="card3">
                    {state.cardsactive['square3'] && <TripleCard card={state.cardsactive['square3']}/>}
                    </Square>
                    <Square title="square4" className="card4">
                    {state.cardsactive['square4'] && <TripleCard card={state.cardsactive['square4']}/>}
                    </Square>
                    <Square title="square5" className="card5">
                    {state.cardsactive['square5'] && <TripleCard card={state.cardsactive['square5']}/>}
                    </Square>
                    <Square title="square6" className="card6">
                    {state.cardsactive['square6'] && <TripleCard card={state.cardsactive['square6']}/>}
                    </Square>
                    <Square title="square7" className="card7">
                    {state.cardsactive['square7'] && <TripleCard card={state.cardsactive['square7']}/>}

                    </Square>
                    <Square title="square8" className="card8">
                    {state.cardsactive['square8'] && <TripleCard card={state.cardsactive['square8']}/>}

                    </Square>
                    <Square title="square9" className="card9">
                    {state.cardsactive['square9'] && <TripleCard card={state.cardsactive['square9']}/>}

                    </Square>
                </div>
            </div>
            <div className="playerHand">
                {
                    Object.values(currentHand).map((key) => (
                        <div className="cardBlock" key={key}>
                            <TripleCard card={key}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}