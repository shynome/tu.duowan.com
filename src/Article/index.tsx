import { createElement as h, Component, StatelessComponent } from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { api } from "./service";
import { ImageDetail } from "../Api/image";
import { ImageList } from "./ImageList";

export type Props = RouteComponentProps<{ id:string }>

export type State = { data: ImageDetail  }

export class Article extends Component< Props, State > {

  state:State = { data:null, }
  
  componentWillMount(){
    this.getData()
  }

  async getData(){

    const { id } = this.props.match.params
    
    console.log(this.props.match.params.id)

    this.setState({ data: await api.detail(id) })
    
  }
  
  render(){

    console.log(this.props.match.params.id)
    
    const { data } = this.state
    if( !data ){ 
      return <div>loading</div>
    }else{
      return <div style={ { margin: '3vw' } }>
        <button onClick={ ()=>this.props.history.goBack() }>back</button>
        <h4>{ data.gallery_title }</h4>
        <ImageList list={ data.picInfo } />
        <button onClick={ ()=>this.props.history.goBack() }>back</button>
      </div>
    }
  }

}

