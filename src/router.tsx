import { BrowserRouter, Route, Link, } from "react-router-dom";
import { createElement as h, StatelessComponent } from "react";

import { JiongTu } from "./JiongTu";
import { Gif } from "./Gif";
import { Home } from "./Home";

export const RouteBasic:StatelessComponent<any> = (props)=>{
  return <BrowserRouter>
    <div>
      <nav>
        <Link to="/">最新</Link>
        <Link to="/gaoxiao">囧图</Link>
        <Link to="/gif">GIF</Link>
      </nav>
      <Route exact path="/" component={ Home } />
      <Route path="/gaoxiao" component={ JiongTu } />
      <Route path="/gif" component={ Gif } />
    </div>
  </BrowserRouter>
}