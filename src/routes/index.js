import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Todo } from "../views/Todo";
import { EditPage } from "../views/EditPage";
import "./index.css";

export const Routes = () => {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/">
          <Redirect to="/todo" />
        </Route>
        <Route exact path="/editpage/:id" component={EditPage} />
      </Switch>
    </div>
  );
};
