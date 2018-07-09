import { createElement as h, StatelessComponent } from "react";
import { RouteComponentProps, Redirect } from "react-router";

export type Props = RouteComponentProps<any>

export const Home:StatelessComponent<Props> = (props)=>{
  return <Redirect to="/latest" />
}
