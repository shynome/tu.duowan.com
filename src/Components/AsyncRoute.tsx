import { createElement as h, Component, StatelessComponent } from "react";
import { RouteComponentProps } from "react-router";

export type State = { 
  loaded: boolean
  Component: any
}

export type Props = {
  Component: ()=>any
  routeProps: any
}

export class AsyncRouteComponent extends Component<Props,State> {

  state:State = { loaded: false, Component: null }
  
  async componentWillMount(){
    const { Component: getComponent } = this.props
    this.setState({
      Component: await getComponent(),
      loaded: true,
    })
  }
  
  render(){
    
    if( this.state.loaded ){

      const { Component } = this.state
      return h(Component,this.props.routeProps)
      
    }else{

      return <div>
        loading
      </div>
      
    }
    
  }
  
}

export const AsyncRoute = (getComponent:any)=>(props:any)=>{
  return <AsyncRouteComponent Component={ getComponent } routeProps={ props } />
}
