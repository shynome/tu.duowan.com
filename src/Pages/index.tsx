import { Page } from "./Page";
import { createElement as h, StatelessComponent } from "react";
import { RouteComponentProps, Redirect, } from "react-router";
import { Api } from "../Api";
import { Name2Tag } from "./data";
import { Nav } from "./Nav";

export const Pages:StatelessComponent<RouteComponentProps<any>> = (props)=>{

  let path = props.match.path.split('/')[1]
  if( typeof Name2Tag[path] === 'undefined' ){
    return <Redirect to="/404"></Redirect>
  }
  let tag = Name2Tag[path].tag
  return <div>
    <header>
      <Nav />
    </header>
    <Page key={ props.match.url } { ...props } api={ new Api(`//tu.duowan.com/index.php?r=api/ajaxgallerys&tag=${tag}`) }></Page>
  </div>

}
