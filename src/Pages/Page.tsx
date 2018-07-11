import { createElement as h, Component, CSSProperties,  } from "react";
import { RouteComponentProps } from "react-router";
import { Api, ImageList as ImageListType } from "../Api";
import { ImageList } from "./ImageList";
import { Link } from "react-router-dom";

export type Props = RouteComponentProps<{ page:string }> & { api:Api }

export type State = { data: ImageListType }

export class Page extends Component< Props, State > {

  state:State = { data:null }
  
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
  
  render(){
    let { page } = this.props.match.params
    const { data } = this.state
    if( !data ){ 
      return <div>loading</div>
    }else{
      let num = Number(page)
      return <div>
        {num > 1 && <Link style={this.LinkStyle} to={ this.props.match.path.replace(':page',`${num-1}`) }>上一页</Link>}
        <ImageList list={ data.gallerys }></ImageList>
        {data.hasMore && <Link style={this.LinkStyle} to={ this.props.match.path.replace(':page',`${num+1}`) }>下一页</Link>}
      </div>
    }
  }

}
