import "./styles/Card.scss";
import card_data from "./cards/cards.json";
import { useState, useContext } from "react";

export default function Card(props) {

    const cardsInHand = props.cards;

  return (
      <>
      {cardsInHand.map((card) => {
          const cardName = card;

          console.log(card_data[cardName].name);
          return (
              <>
              <div className="cardBox">
                  <div className="botCol1">
                      {/* <h1>{card_data.cardName.name}</h1> */}
                  </div>
              </div>
              </>
          )
      })}
    <div className="cardBox">
      <div className="boxCol1">
        <h1>{card_data.gillian.name}</h1>
        <p>Life: {card_data.gillian.hp}</p>
      </div>
      <div className="boxCol2">
        <img src={card_data.gillian.image} alt={card_data.gillian.name} />
      </div>

      <div className="abilityBox">
        {card_data.gillian.abilities.map((e) => {
          return (
            <div className="abilityBox" key={e.toString()}>
              <button>{e}</button>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
