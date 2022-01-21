import {useState, useEffect, useContext} from "react";
import { Context } from "../Store";
import card_data from './cards/cards.json';
import TripleCard from "./TripleCard";
import './styles/TestBattle.scss';

export default function TestBattle() {
    const [state, dispatch] = useContext(Context);

    const currentHand = state.cardsheld;

    // function to push current hand into cards

    const currentHandDeck = (params) => {

        
        Object.values(currentHand).forEach(e => {
            let cardChar = currentHand[e];
            console.log('hand: ' + currentHand[e])
            return (
                <div className="cardBlock">
                    <TripleCard card={cardChar}/>
                </div>
            );
        })
        return;
    }
    


    // if array of all 9 positions has a card in position x, put <TripleCard/> in that location with a param call to the specific card
    return (
        <div className="gameScene">
            <div className="leftHand">
                ENEMY HAND
            </div>
            <div className="gameBoard">
                <div className="battleBoard">
                    <div className="card1">
                        <TripleCard card={"gillian"}/>
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