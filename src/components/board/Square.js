import {useState, useContext, useEffect} from 'react';
import TripleCard from '../TripleCard';
import { Context } from '../../Store';
import {useDrag, useDrop} from 'react-dnd';
import { ItemTypes } from '../Constants';

export default function Square(params){

    const [state, dispatch] = useContext(Context);

    console.log("card: " + params.card)
    // drop funcitonality
    // function to actually drop the card
    const dropCard = (cardDropped) => {
        dispatch({type: "SET_CARD_ACTIVE", payload: {
            prop: params.title,
            value: cardDropped.cardId
        }})

        Object.entries(state.cardsactive).map(e=>console.log(e));
        let oldHand = state.playinghand;
        console.log('oldhand: ' + oldHand)
        let newHand = oldHand.filter(e => e !== cardDropped.cardId.toString());
        console.log('newhand: ' + newHand)
        dispatch({type: "REMOVE_CARD_IN_GAME", payload: newHand});
    }

    // drop logic
    const [{isOver}, dropRef] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item) => {dropCard(item); return {name: params.title}},
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),
    })

    return (
        <div className={params.className} ref={dropRef}>
            {params.children}
        </div>
    )
}