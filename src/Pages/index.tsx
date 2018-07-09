import { Page } from "./Page";
import { createElement as h, StatelessComponent } from "react";
import { RouteComponentProps, Redirect } from "react-router";
import { Api } from "../Api";

export const Name2Tag:{ [key:string]:number } = {
  'tucao': 15203,
  'latest': 0,
  'jiongtu': 56,
  'gif': 9031,
}

export const Pages:StatelessComponent<RouteComponentProps<any>> = (props)=>{

  let path = props.match.path.split('/')[1]
  let tag = Name2Tag[path]
  if( typeof tag === 'undefined' ){
    return <Redirect to="/404"></Redirect>
  }
  return <Page { ...props } api={ new Api(`http://tu.duowan.com/index.php?r=api/ajaxgallerys&tag=${tag}`) }></Page>

}
