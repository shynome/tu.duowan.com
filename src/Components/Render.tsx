import { createElement as h, Component, StatelessComponent } from "react";

export type Props = {
  Component: StatelessComponent
}

export class AsyncComponent extends Component {
  
  render(){
    return <div>
      { this.props.children }
    </div>
  }
  
}
