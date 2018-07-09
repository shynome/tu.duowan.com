
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
    return fetchJsonp(this.baseurl).then(r=>r.json())
  }
  
  async detail(id:string):Promise<any> {
    debugger
    return fetchJsonp(this.baseurl).then(r=>r.json())
  }
  
}
