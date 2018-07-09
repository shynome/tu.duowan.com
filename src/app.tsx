import ReactDOM from 'react-dom'
import { createElement as h } from 'react'
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router";

ReactDOM.render(
  <BrowserRouter>
    <Router/>
  </BrowserRouter>,
  document.getElementById('app'),
)