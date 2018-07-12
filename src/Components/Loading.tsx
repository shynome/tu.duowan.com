
import { createElement as h, Component } from "react";
import { createPortal } from "react-dom";

export type Props = {
  finished?: boolean
}

export type State = {
}

export class Loading extends Component<Props,State> {
  
  
  render(){
    return createPortal(
      <div className={ `progress-bar  ${this.props.finished?'finished':''}` }>loading</div>,
      document.getElementById('loading'),
      'loading'
    )
  }

}
