import { BrowserRouter, Route, NavLink, } from "react-router-dom";
import { createElement as h, StatelessComponent } from "react";

import { JiongTu } from "./JiongTu";
import { Gif } from "./Gif";
import { Home } from "./Home";
import { Header } from "./Header";

export const Routes:[ string, StatelessComponent<any> ][] = [
  [ '/', Home ],
  [ '/jiongtu', JiongTu ],
  [ '/gif', Gif ],
]

import { createBrowserHistory } from "history";
import qhistory from "qhistory";
import { stringify, parse } from "qs";
export const history = qhistory(
  createBrowserHistory({}),
  stringify,
  parse 
)

export const RouteBasic:StatelessComponent<any> = (props)=>{
  const RouteMaps = Routes.map( ([path, Component])=>{
    return <Route exact key={ path } path={ path } component={ Component } />
  } )
  return <BrowserRouter>
    <div>
      <Header />
      { RouteMaps }
    </div>
  </BrowserRouter>
}