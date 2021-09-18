import React, { useState } from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./hooks.js";
import { formatCard } from "./helpers";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {

  const [cards, addCard, clearCards] = useAxios("https://deckofcardsapi.com/api/deck/new/draw");

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a playing card!</button>
        <button onClick={clearCards}>Clear cards from table!</button>
      </div>
      <div className="PlayingCardList-card-area">
      {cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
