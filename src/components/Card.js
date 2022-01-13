import "./styles/Card.scss";
import card_data from "./cards/cards.json";
import ability_desc from "./cards/abilities.json";
import React, { useState, useContext } from "react";
import ReactTooltip from 'react-tooltip'

export default function Cards(props) {
  const cardsInHand = props.cards;

  // Logic for Abilities Here, needs a switch statement. 

  const useofAbility = (ability) =>{
      switch (ability) {
        case 'investigate':
        default:
          alert(ability);
      }
  }

  return (
    <>
      {cardsInHand.map((card,index) => {
        return (
          <>
            <div className="cardBox flexitems">
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
                <p>{card_data[card].name}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
