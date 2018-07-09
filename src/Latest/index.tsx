import { createElement as h, Component, StatelessComponent } from "react";
import { RouteComponentProps } from "react-router";
import { api, ImageList as ImageListType } from "./service";
import { ImageList } from "../Components/ImageList";

export type Props = { page:number }

export type State = { data: ImageListType }

export class Latest extends Component< RouteComponentProps<Props>, State > {

  state:State = { data:null }
  
  componentWillMount(){
    this.getData()
  }

  async getData(){

    const { page } = this.props.match.params

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
