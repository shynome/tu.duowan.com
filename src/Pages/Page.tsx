import { createElement as h, Component, CSSProperties, StatelessComponent  } from "react";
import { RouteComponentProps } from "react-router";
import { Api, ImageList as ImageListType } from "../Api";
import { ImageList, AsyncRoute, Loading } from "../Components";
import { Link } from "react-router-dom";

export type Props = RouteComponentProps<{ page:string }> & { api:Api }

export type State = { data: ImageListType, gallery_id: string }

export class Page extends Component< Props, State > {

  state:State = { data:null, gallery_id:null }
  
  componentWillMount(){
    this.getData()
  }
  
  async getData(){

    const { page } = this.props.match.params
    const { api } = this.props

    this.setState({ data: await api.page(page) })
    
  }

  LinkStyle:CSSProperties = {
    display: 'block',
    textAlign: 'center',
    margin: '7px',
    padding: '10px 0',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.2)',
  }

  onCloseGallery = ()=>{
    this.setState({ gallery_id:null })
  }

  Gallery = AsyncRoute(()=>import('../Article/Gallery').then(m=>m.Gallery))
  
  render(){
    let { page } = this.props.match.params
    const { data, gallery_id } = this.state
    if( !data ){ 
      return <Loading />
    }else{
      let num = Number(page)
      const { Gallery } = this
      return <div>

        { gallery_id && <Gallery id={ gallery_id } onClose={ this.onCloseGallery } ></Gallery> }

        {num > 1 && <Link style={this.LinkStyle} to={ this.props.match.path.replace(':page',`${num-1}`) }>上一页</Link>}
        <ImageList list={ data.gallerys } onClick={ (id)=>this.setState({ gallery_id:id }) } ></ImageList>
        {data.hasMore && <Link style={this.LinkStyle} to={ this.props.match.path.replace(':page',`${num+1}`) }>下一页</Link>}
        
      </div>
    }
  }

}
