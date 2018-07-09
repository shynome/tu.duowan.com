import { createElement as h, Component, StatelessComponent } from "react";
import { RouteComponentProps } from "react-router";
import { Api, ImageList as ImageListType } from "../Api";
import { ImageList } from "../Components/ImageList";

export type Props = { page:number }

export type State = { data: ImageListType }

export class Page extends Component< RouteComponentProps<Props> & { api:Api }, State > {

  state:State = { data:null }
  
  componentWillMount(){
    this.getData()
  }

  async getData(){

    const { page } = this.props.match.params
    const { api } = this.props

    this.setState({ data: await api.page(page) })
    
  }
  
  render(){
    if( !this.state.data ){ 
      return <div>loading</div>
    }else{
      return <ImageList list={ this.state.data.gallerys }></ImageList>
    }
  }

}
