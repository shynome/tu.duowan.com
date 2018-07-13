import { Route, Switch, Redirect } from "react-router";
import { createElement as h, StatelessComponent } from "react";

import { AsyncRoute } from "./Components/AsyncRoute";

import { NotFound } from "./NotFound";
import { Article } from "./Article";
import { PagesRoute } from "./Pages/route";

export const Routes:[ string, any ][] = [

  [ '/', ()=><Redirect to="/latest" /> ],

  [ '/404', NotFound ],

  ...PagesRoute,

  [ '/article/:id', Article ],
  [ '/article/', ()=><Redirect to="/" /> ],

]

export const SwitchRouter:StatelessComponent<any> = (props)=>{
  const RouteMaps = Routes.map( ([path, Component ])=>{
    return <Route exact key={ path } path={ path } component={ Component } />
  } )
  return <div>
    <Switch>
      { RouteMaps }
      <Route component={ NotFound } />
    </Switch>
  </div>
}