import { createElement as h, Component } from "react";
import { PhotoSwipe, Item as PhotoSwipeItem, pswp, Options } from "react-photoswipe";
import { api, storage } from "./service";
import { ImageDetail } from "../Api/image";
import { Loading } from "../Components";

export type Props = {
  id: string
  onClose: Function
}

export type State = {
  items: PhotoSwipeItem[]
  data: ImageDetail
}

export class Gallery extends Component<Props,State> {

  state:State = { data:null, items:null }
  
  componentWillMount(){
    this.getData()
  }
  
  getData = async ()=>{
    const data = await api.detail(this.props.id)
    const items = data.picInfo.map(pic=>{
      return {
        src: pic.source,
        w: Number(pic.file_width),
        h: Number(pic.file_height),
        title: pic.add_intro,
      } as PhotoSwipeItem
    })
    this.setState({ items, data })
  }

  setLastViewIndex = (pswp:pswp)=>{
    const index = pswp.getCurrentIndex()
    storage.set(this.props.id,index)
  }
  
  render(){
    const { items } = this.state
    if( !items ){
      return <Loading />
    }else{
      return <div>
        <Loading finished/>
        <PhotoSwipe isOpen afterChange={ this.setLastViewIndex } options={ { galleryUID: this.props.id, index: storage.get(this.props.id)  } } items={ this.state.items } onClose={ this.props.onClose } />
      </div>
    }
  }

}
