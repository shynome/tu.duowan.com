import { createElement as h, Component, CSSProperties, StatelessComponent  } from "react";
import { RouteComponentProps } from "react-router";
import { Api, ImageList as ImageListType } from "../Api";
import { ImageList, AsyncRoute, Loading } from "../Components";
import { Link } from "react-router-dom";
import { Props as GalleryProps } from "../Article/Gallery";

export type Props = RouteComponentProps<{ page:string }> & { api:Api }

export type State = { data: ImageListType, gallery_id: string }

export class Page extends Component< Props, State > {

  state:State = { data:null, gallery_id:null }

  constructor(props:Props){
    super(props)
    let match = props.location.hash.match(/gid\=(\d+)/)
    if( match ){ this.state.gallery_id = match[1] }
  }
  
  componentWillMount(){
    this.getData()
  }
  
  async getData(){

    const { page } = this.props.match.params
    const { api } = this.props

    this.setState({ data: await api.page(page) })
    
  }

  onCloseGallery = ()=>{
    this.setState({ gallery_id:null })
  }

  Gallery:StatelessComponent<GalleryProps> = AsyncRoute(()=>import('../Article/Gallery').then(m=>m.Gallery))
  
  render(){
    let { page } = this.props.match.params
    const { data, gallery_id } = this.state
    if( !data ){ 
      return <Loading />
    }else{
      let num = Number(page)
      const { Gallery } = this
      return <div>
        <Loading finished />

        { gallery_id && <Gallery id={ gallery_id } onClose={ this.onCloseGallery } ></Gallery> }

        {num > 1 && <Link className={'btn'} to={ this.props.match.path.replace(':page',`${num-1}`) }>上一页</Link>}
        <ImageList list={ data.gallerys } onClick={ (id)=>this.setState({ gallery_id:id }) } ></ImageList>
        {data.hasMore && <Link className={'btn'} to={ this.props.match.path.replace(':page',`${num+1}`) }>下一页</Link>}
        
      </div>
    }
  }

}
