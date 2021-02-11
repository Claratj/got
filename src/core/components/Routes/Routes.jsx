import React from "react";
import { Route, Switch } from "react-router-dom";
import { CharactersPage } from "../../../Pages/CharactersPage/CharactersPage";
import { ChronologyPage } from "../../../Pages/ChronologyPage/ChronologyPage";
import { HomePage } from "../../../Pages/HomePage/HomePage";
import { HousesPage } from "../../../Pages/HousesPage/HousesPage";

export function Routes() {
  return (
    <Switch>
      <Route path="/characters">
        <CharactersPage />
      </Route>
      <Route path="/houses">
        <HousesPage />
      </Route>
      <Route path="/chronology">
        <ChronologyPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="*">
        <p>URL NOT FOUND</p>
      </Route>
    </Switch>
  );
}
