import { createElement as h, Component, StatelessComponent } from "react";
import { RouteComponentProps } from "react-router";
import { api } from "./service";
import { ImageDetail } from "../Api/image";

export type Props = { id:string }

export type State = { data: ImageDetail  }

export class Article extends Component< RouteComponentProps<Props>, State > {

  state:State = { data:null }
  
  componentWillMount(){
    this.getData()
  }

  async getData(){

    const { id } = this.props.match.params

    this.setState({ data: await api.detail(id) })
    
  }
  
  render(){
    if( !this.state.data ){ 
      return <div>loading</div>
    }else{
      return <div>{JSON.stringify(this.state.data)}</div>
    }
  }

}
