
import fetchJsonp from "fetch-jsonp";

export interface Image {
  comment_count: string
  cover_url: string
  gallery_id: string
  title: string
  updated: string
  url: string
}

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
