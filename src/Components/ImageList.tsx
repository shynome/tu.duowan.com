import { createElement as h, StatelessComponent } from "react";
import { Image } from "../Api/image";
import { Link } from "react-router-dom";

export interface Props {
  list: Image[]
  onClick?: (gallery_id:string)=>any
}

export const ImageList:StatelessComponent<Props> = (props) =>{
  let list = props.list.map( image=>{
    return <li key={ image.gallery_id }>
      {/* <a to={ `/article/${image.gallery_id}` }> */}
      <a onClick={ ()=>props.onClick(image.gallery_id) } >
        <div className="image" style={{ backgroundImage: `url(${image.cover_url})` }}></div>
        <div className="title">{ image.title }</div>
        <div className="info">
          <span className="comment_count">{ image.comment_count }</span>
          <span className="updated">{ image.updated }</span>
        </div>
      </a>
    </li>
  })
  return <ul className="image_list">
    { list }
  </ul>
}
