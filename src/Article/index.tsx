import { createElement as h, Component, } from "react";
import { RouteComponentProps } from "react-router";
import { api } from "./service";
import { ImageDetail } from "../Api/image";
import { ImageList } from "./ImageList";
import { PhotoSwipe, Item as PhotoSwipeItem } from "react-photoswipe";
import "react-photoswipe/lib/photoswipe.css";

export type Props = RouteComponentProps<{ id:string }>

export type State = { data: ImageDetail, items: PhotoSwipeItem[]  }

export class Article extends Component< Props, State > {

  state:State = { data:null, items:null }
  
  componentWillMount(){
    this.getData()
  }

  async getData(){

    const { id } = this.props.match.params

    let data = await api.detail(id)
    let items = data.picInfo.map(pic=>{
      return {
        src: pic.source,
        w: Number(pic.file_width),
        h: Number(pic.file_height),
        title: pic.add_intro,
      } as PhotoSwipeItem
    })
    
    this.setState({ data, items })
    
  }

  onClose = ()=>{
    this.props.history.goBack()
    console.log(6666)
  }
  
  render(){
    
    const { data, items } = this.state
    if( !data ){ 
      return <div>loading</div>
    }else{
      return <PhotoSwipe isOpen items={ items } />
    }
  }

}

