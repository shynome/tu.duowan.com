import fetchJsonp from "fetch-jsonp";
import { Image, ImageDetail, Pic } from "./image";

export type ImageList = {
  gallerys: Image[]
  hasMore: number
  offset: number
}

import { http2s } from "../utils";

export class Api {

  baseurl:string

  constructor(baseurl:string){

    this.baseurl = baseurl
    
  }
  
  async page(num='1', size=10):Promise<ImageList>{
    return fetchJsonp(`${this.baseurl}&page=${num}&pageSize=${size}`).then(t=>t.json())
    .then((res:ImageList)=>{
      res.gallerys = res.gallerys.map(item=>{
        return http2s<Image>(item,['url','cover_url'])
      })
      return res
    })
  }
  
  async detail(id:string) {
    return fetchJsonp(`${this.baseurl}&gid=${id}`).then(t=>t.json())
    .then((res:ImageDetail)=>{
      res.picInfo = res.picInfo.map(item=>{
        return http2s<Pic>(item,['cover_url','file_url','mp4_url','cmt_url','source'])
      })
      return res
    })
  }
  
}
