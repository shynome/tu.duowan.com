import { createElement as h, StatelessComponent } from "react";
import { NavLink } from "react-router-dom";

export const Nav:StatelessComponent = ()=>{
  let links = [
    [ '/latest', '首页' ],
    [ '/jiongtu', '囧图' ],
    [ '/gif', 'GIF' ],
  ].map(([ path, name ])=>{
    return <NavLink to={ path } key={ path } >{ name }</NavLink>
  })
  return <nav>
    { links }
  </nav>
}