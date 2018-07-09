import { createElement as h, StatelessComponent } from "react";
import { api } from "./service";
import { RouteComponentProps } from "react-router";
import { Page } from "../Components/Page";

export const Latest = (props:RouteComponentProps<any>)=>{
  return <Page { ...props } api={ api }></Page>
}