import { createElement as h, StatelessComponent } from "react";
import { RouteComponentProps } from "react-router-dom";

export type Props = RouteComponentProps<{ page:number }>

export const Gif:StatelessComponent<Props> = (props)=>{
  console.log( props.match.params.page )  
  return <div>
    BxGif
  </div>
}
