import { createElement as h, StatelessComponent } from "react";
import { RouteComponentProps } from "react-router-dom";

export type Props = RouteComponentProps<any>

export const Gif:StatelessComponent<Props> = (props)=>{
  console.log( props.location )  
  return <div>
    BxGif
  </div>
}
