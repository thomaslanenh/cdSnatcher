import { useState, useContext, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { Context } from "../Store";
import { ItemTypes } from "./Constants";
import { useDrag } from "react-dnd";
import card_data from "./cards/cards.json";
import "./styles/TripleCard.scss";

export default function TripleCard(params) {

 const cardId = card_data[params.card].id;
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: {cardId},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const isEnemy = true;

  const styles = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url(" +
      card_data[params.card].image +
      ")",
    opacity: isDragging ? "0.2" : "1",
    backgroundPosition: isEnemy ? "center center" : null
  };

  return (
    <div
      className="tripleCard"
      style={styles}
      ref={drag}
    >
      <div className="cardStats">
        <h2 data-tip={card_data[params.card].flavortext}>
          {card_data[params.card].name}
        </h2>
        <ReactTooltip />
        <p>{card_data[params.card].up}</p>
        <p>
          {card_data[params.card].left} {card_data[params.card].right}
        </p>
        <p>{card_data[params.card].down}</p>
      </div>
    </div>
  );
}
