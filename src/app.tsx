import ReactDOM from 'react-dom'
import { createElement as h } from 'react'
import { Router } from "react-router-dom";

import { SwitchRouter } from "./router";
import { history } from "./history";

ReactDOM.render(
  <Router history={ history } >
    <SwitchRouter/>
  </Router>,
  document.getElementById('app'),
)