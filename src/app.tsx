import ReactDOM from 'react-dom'
import { createElement as h } from 'react'
import { BrowserRouter } from "react-router-dom";

import { SwitchRouter } from "./router";

window.addEventListener('load',()=>import('./track'))

ReactDOM.render(
  <BrowserRouter>
    <SwitchRouter/>
  </BrowserRouter>,
  document.getElementById('app'),
)