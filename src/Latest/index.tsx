import { createElement as h, StatelessComponent } from "react";
import { RouteComponentProps } from "react-router";
import { api } from "./service";
import { AsyncComponent } from "@Components/Render";

export type Props = RouteComponentProps<{ page:number }>

export const Latest:StatelessComponent<Props> = (props)=>{
  const { page } = props.match.params
  api.page(page)
  return <AsyncComponent>
    hello world
  </AsyncComponent>
}

