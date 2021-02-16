import React from "react";
import { Route, Switch } from "react-router-dom";
import { CharactersPage } from "../../../Pages/CharactersPage/CharactersPage";
import { CharactersDetail } from "../../../Pages/CharactersPage/components/CharactersDetail/CharactersDetail";
import { ChronologyPage } from "../../../Pages/ChronologyPage/ChronologyPage";
import { HomePage } from "../../../Pages/HomePage/HomePage";
import { HousesPage } from "../../../Pages/HousesPage/HousesPage";
import { HouseDetailPage } from "../../../Pages/HousesPage/Page/HouseDetailPage/HouseDetailPage";

export function Routes() {
  return (
    <Switch>
      <Route path="/characters/:characterName">
        <CharactersDetail />
      </Route>
      <Route path="/characters">
        <CharactersPage />
      </Route>
      <Route path="/houses/:houseName">
        <HouseDetailPage/>
      </Route>
      <Route path="/houses">
        <HousesPage />
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
