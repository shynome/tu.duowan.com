import { createElement as h, StatelessComponent } from "react";
import { RouteComponentProps, } from "react-router";
import { Link } from "react-router-dom";

export type Props = RouteComponentProps<any>

export const NotFound:StatelessComponent<Props> = (props)=>{
  return <div style={{ textAlign: 'center' }}>
    { props.location.pathname } is not found <br/>
    <Link to="/">点击回到首页</Link>
  </div>
}
