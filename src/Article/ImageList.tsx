import { createElement as h, StatelessComponent } from "react";
import { Pic } from "../Api/image";

export const ImageList:StatelessComponent<{list:Pic[]}> = (props)=>{
  let list = props.list.map(pic=>{
    return <li key={ pic.pic_id } style={{margin:'2vw 0', borderBottom: '1px solid rgba(0,0,0,0.3)' }}>
      {/* {
        pic.mp4_url
        ? <div className="video">
          <video src={pic.mp4_url} autoPlay loop width={pic.file_width} height={pic.file_height}></video>
        </div>
        :<div className="img">
          <img src={pic.source} style={{maxWidth:'100%'}}/>
        </div>
      } */}
      <div className="img" >
        <img src={pic.source} style={{maxWidth:'100%'}} />
      </div>
      <div className="add_intro">{ pic.add_intro }</div>
    </li>
  })
  return <ul>
    { list }
  </ul>
}
