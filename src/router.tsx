import { Route, Switch, Redirect } from "react-router";
import { createElement as h, StatelessComponent } from "react";

import { Header } from "./Header";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
import { JiongTu } from "./JiongTu";
import { Gif } from "./Gif";
import { Latest } from "./Latest";

export const Routes:[ string, StatelessComponent<any> ][] = [
  [ '/', Home ],
  [ '/latest/:page', Latest ],
  [ '/latest', ()=><Redirect to="/latest/0" /> ],
  [ '/jiongtu/:page', JiongTu ],
  [ '/jiongtu', ()=><Redirect to="/jiongtu/0" /> ],
  [ '/gif/:page', Gif ],
  [ '/gif', ()=><Redirect to="/gif/0" /> ],
]

import { createBrowserHistory } from "history";
import qhistory from "qhistory";
import { stringify, parse } from "qs";
export const history = qhistory(
  createBrowserHistory({}),
  stringify,
  parse 
)

export const Router:StatelessComponent<any> = (props)=>{
  const RouteMaps = Routes.map( ([path, Component])=>{
    return <Route exact key={ path } path={ path } component={ Component } />
  } )
  return <div>
    <Header />
    <Switch>
      { RouteMaps }
      <Route component={ NotFound } />
    </Switch>
  </div>
}