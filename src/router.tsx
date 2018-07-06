import { BrowserRouter, Route, NavLink, } from "react-router-dom";
import { createElement as h, StatelessComponent } from "react";

import { JiongTu } from "./JiongTu";
import { Gif } from "./Gif";
import { Home } from "./Home";
import { Header } from "./Header";

export const Routes:[ string, StatelessComponent ][] = [
  [ '/', Home ],
  [ '/jiongtu', JiongTu ],
  [ '/gif', Gif ],
]

export const RouteBasic:StatelessComponent<any> = (props)=>{
  const RouteMaps = Routes.map( ([path, Component])=>{
    return <Route exact path={ path } component={ Component } />
  } )
  return <BrowserRouter>
    <div>
      <Header />
      { RouteMaps }
    </div>
  </BrowserRouter>
}