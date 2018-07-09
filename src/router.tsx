import { Route, Switch, Redirect } from "react-router";
import { createElement as h, StatelessComponent } from "react";

import { AsyncRoute } from "./Components/AsyncRoute";

import { Header } from "./Header";
import { NotFound } from "./NotFound";

export const Routes:[ string, any ][] = [

  [ '/', ()=><Redirect to="/latest" /> ],

  [ '/latest/:page', AsyncRoute(()=>import('./Latest').then(t=>t.Latest)) ],
  [ '/latest', ()=><Redirect to="/latest/1" /> ],

  [ '/jiongtu/:page', AsyncRoute(()=>import('./JiongTu').then(t=>t.JiongTu)) ],
  [ '/jiongtu', ()=><Redirect to="/jiongtu/1" /> ],

  [ '/gif/:page', AsyncRoute(()=>import('./Gif').then(t=>t.Gif)) ],
  [ '/gif', ()=><Redirect to="/gif/1" /> ],

]

export const Router:StatelessComponent<any> = (props)=>{
  const RouteMaps = Routes.map( ([path, Component ])=>{
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