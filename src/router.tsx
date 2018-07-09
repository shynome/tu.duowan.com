import { Route, Switch, Redirect } from "react-router";
import { createElement as h, StatelessComponent } from "react";

import { AsyncRoute } from "./Components/AsyncRoute";

import { NotFound } from "./NotFound";
import { Article } from "./Article";
const Page = AsyncRoute(()=>import('./Pages').then(t=>t.Pages))

export const Routes:[ string, any ][] = [

  [ '/', ()=><Redirect to="/latest" /> ],

  [ '/404', NotFound ],

  [ '/latest/:page', Page ],
  [ '/latest', ()=><Redirect to="/latest/1" /> ],

  [ '/jiongtu/:page',Page ],
  [ '/jiongtu', ()=><Redirect to="/jiongtu/1" /> ],

  [ '/gif/:page', Page ],
  [ '/gif', ()=><Redirect to="/gif/1" /> ],

  [ '/tucao/:page', Page ],
  [ '/tucao', ()=><Redirect to="/tucao/1" /> ],

  [ '/article/:id', Article ],
  [ '/article/', ()=><Redirect to="/" /> ],

]

export const Router:StatelessComponent<any> = (props)=>{
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