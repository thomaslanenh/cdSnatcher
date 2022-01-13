import "./styles/Card.scss";
import card_data from "./cards/cards.json";
import ability_desc from "./cards/abilities.json";
import {Context} from "../Store";
import React, { useState, useContext } from "react";
import ReactTooltip from 'react-tooltip'
import * as Abilities from '../controllers/Abilities'

export default function Cards(props) {

  const [state, dispatch] = useContext(Context);
  const cardsInHand = props.cards;

  // Logic for Abilities Here, needs a switch statement. 

  const useofAbility = (ability) =>{

      switch (ability.toLowerCase()) {
        case 'investigate':
          return Abilities.Investigate();
        case 'shoot':
          return Abilities.Shoot()
        case 'analyze':
          return Abilities.Analyze();
        case 'self-destruct':
          return Abilities.SelfDestruct();
        default:

      }
  }

  return (
    <>
      {cardsInHand.map((card,index) => {
        return (

            <div className="cardBox" key={index.toString()}>
              <div className="boxCol1" style={{backgroundImage: 'url(' + card_data[card].image + ')'}}>
                {/* <img src={card_data[card].image} alt={card_data[card].name} /> */}
              </div>
              <div className="boxCol2">
                <h1>{card_data[card].name}</h1>
              </div>
              <div className="boxCol3">
                <p>Life: {card_data[card].hp}</p>
              </div>

              <div className="abilityBox">
                {card_data[card].abilities.map((e) => {
                  return (
                    <div className="nameBox" key={e.toString()}>
                      <a onClick={()=>{useofAbility(ability_desc[e].name)}} data-tip={ability_desc[e].text} key={e.toString()}>{ability_desc[e].name}</a>
                      <ReactTooltip/>
                    </div>
                  );
                })}
              </div>
              <div className="infoLeft">
                <p>Snatcher</p>
              </div>
              <div className="infoRight">
                <p>Card #:{card_data[card].cardnumber}</p>
              </div>
            </div>
        );
      })}
    </>
  );
}
