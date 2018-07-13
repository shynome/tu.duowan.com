import { createElement as h, StatelessComponent } from "react";
import { Redirect, RouteComponentProps } from "react-router";

import { Storage } from "../Storage";
export const storage = new Storage<String>('page_num_record') 

import { AsyncRoute } from "../Components";

const page = AsyncRoute(()=>import('.').then(({ Pages })=>{
  return (props:RouteComponentProps<{ page:string }>)=>{

    let path = '/'+props.match.path.split('/')[1]
    storage.set(path,props.match.params.page)
    
    return <Pages {...props}/>

  }
}))


const redirect:StatelessComponent<RouteComponentProps<any>> = (props)=>{
  
  const lastViewPage = storage.get(props.match.path) || '1'
  
  return <Redirect to={ `${props.match.path}/${lastViewPage}` } />

}

import { Name2Tag } from "./data";
export const PagesRoute = Object.keys(Name2Tag)
.map(name=>{
  return [
    [ `/${name}`, redirect ],
    [ `/${name}/:page`, page ]
  ] as [ string, any ][]
})
.reduce((p,v)=>p.concat(v),[])
