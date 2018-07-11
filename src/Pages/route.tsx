import { createElement as h } from "react";
import { Redirect } from "react-router";

import { AsyncRoute } from "../Components";

const Page = AsyncRoute(()=>import('./').then(t=>t.Pages))
import { Name2Tag } from "./data";
export const PagesRoute = Object.keys(Name2Tag)
.map(name=>{
  return [
    [ `/${name}`, ()=><Redirect to={ `/${name}/1` } /> ],
    [ `/${name}/:page`, Page ]
  ] as [ string, any ][]
})
.reduce((p,v)=>p.concat(v),[])
