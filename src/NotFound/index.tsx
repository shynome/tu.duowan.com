import { createElement as h, StatelessComponent } from "react";
import { RouteComponentProps } from "react-router-dom";

export type Props = RouteComponentProps<any>

export const NotFound:StatelessComponent<Props> = (props)=>{
  return <div>
    { props.location.pathname } is not found
  </div>
}
