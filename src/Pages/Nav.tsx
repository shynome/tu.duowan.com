import { Name2Tag } from "./data";
import { createElement as h, StatelessComponent } from "react";
import { NavLink } from "react-router-dom";

export const Nav:StatelessComponent = ()=>{
  let data = Object.keys(Name2Tag).map( k=>[ '/'+k, Name2Tag[k].name ] )
  let links = data.map(([ path, name ])=>{
    return <NavLink to={ path } key={ path } >{ name }</NavLink>
  })
  return <nav>
    { links }
  </nav>
}
