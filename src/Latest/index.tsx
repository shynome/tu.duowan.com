import { createElement as h, StatelessComponent } from "react";
import { RouteComponentProps } from "react-router";

export type Props = RouteComponentProps<{ page:number }>

export const Latest:StatelessComponent<Props> = (props)=>{
  return <div>
    Latest
  </div>
}
