import React from "react";
import { Switch, Route } from "react-router-dom";
import { Cards } from "../cards";
import { EditDeck } from "./EditDeck";
import { NewDeck } from "./NewDeck";
import { Study } from "./Study";
import { ViewDeck } from "./ViewDeck";

export function Decks({ decks, addDeck }) {
  return (
    <div>
      <Switch>
        <Route path="/decks/new">
          <NewDeck addDeck={addDeck}/>
        </Route>
        <Route path="/decks/:deckId/study">
          <Study decks={decks} />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        <Route path="/decks/:deckId/cards">
          <Cards />
        </Route>
        <Route path="/decks/:deckId">
          <ViewDeck />
        </Route>
      </Switch>
    </div>
  );
}