import fetchJsonp from "fetch-jsonp";
import { Image } from "./image";

export type ImageList = {
  gallerys: Image[]
  hasMore: number
  offset: number
}

export class Api {

  baseurl:string

  constructor(baseurl:string){

    this.baseurl = baseurl
    
  }
  
  async page(num=1, size=10):Promise<ImageList>{
    return fetchJsonp(`${this.baseurl}&page=${num}&pageSize=${size}`).then(t=>t.json())
  }
  
  async detail(id:string):Promise<any> {
    return fetchJsonp(`${this.baseurl}&gid=${id}`).then(t=>t.json())
  }
  
}
