import {useState, useEffect, useContext} from "react";
import { Context } from "../Store";
import card_data from './cards/cards.json';
import TripleCard from "./TripleCard";
import {useDrag, useDrop} from 'react-dnd';
import './styles/TestBattle.scss';
import { ItemTypes } from "./Constants";

export default function TestBattle() {
    const [state, dispatch] = useContext(Context);

    const [card1, setCard1] = useState();

    const currentHand = state.playinghand;

    const removeCard = (arr, value) =>{
        console.log("remove card: " + value)
        return arr.filter(e=> e !== value)
    }

    // drop funcitonality
    const [{isOver}, dropRef] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item) => {
            setCard1(item.cardId);
            let oldHand = state.playinghand;
            console.log('oldhand: ' + oldHand)
            console.log(item);
            let newHand = oldHand.filter(e => e !== item.cardId.toString());
            console.log('newhand: ' + newHand)
            dispatch({type: "REMOVE_CARD_IN_GAME", payload: newHand});
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    // if array of all 9 positions has a card in position x, put <TripleCard/> in that location with a param call to the specific card
    return (
        <div className="gameScene">
            <div className="leftHand">
                ENEMY HAND
            </div>
            <div className="gameBoard">
                <div className="battleBoard">
                    <div className="card1" ref={dropRef}>
                        {card1 ? <TripleCard card={card1}/> : null}
                    </div>
                    <div className="card2">
                        CARD2 HERE
                    </div>
                    <div className="card3">
                        CARD3 HERE
                    </div>
                    <div className="card4">
                        CARD4 HERE
                    </div>
                    <div className="card5">
                        CARD5 HERE
                    </div>
                    <div className="card6">
                        CARD6 HERE
                    </div>
                    <div className="card7">
                        CARD7 HERE
                    </div>
                    <div className="card8">
                        CARD8 HERE
                    </div>
                    <div className="card9">
                        CARD9 HERE
                    </div>
                </div>
            </div>
            <div className="playerHand">
                {
                    Object.values(currentHand).map((key) => (
                        <div className="cardBlock">
                            <TripleCard card={key}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}