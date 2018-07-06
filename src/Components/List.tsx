import { createElement as h, StatelessComponent } from "react";
import { Image } from "../Api";
import { Link } from "react-router-dom";

export interface Props {
  list: Image[]
}

export const ImageList:StatelessComponent<Props> = (props) =>{
  let list = props.list.map( image=>{
    return <li>
      <Link to={ `/detail/${image.gallery_id}` }>
        <div className="image"><img src={ image.cover_url } alt=""/></div>
        <div className="title">{ image.title }</div>
        <div className="info">
          <span className="comment_count">{ image.comment_count }</span>
          <span className="updated">{ image.updated }</span>
        </div>
      </Link>
    </li>
  })
  return <ul>
    { list }
  </ul>
}
