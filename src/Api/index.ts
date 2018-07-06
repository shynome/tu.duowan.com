
import fetchJsonp from "fetch-jsonp";
import { Image } from "./image";

export class Api {

  baseurl:string
  constructor(baseurl:string){
    this.baseurl = baseurl
  }
  
  get(){
    return fetchJsonp(this.baseurl)
  }
  
  async page(num=1, size=10):Promise<Image[]>{
    return 
  }
  
  async detail(id:string):Promise<any> {
    
  }
  
}
