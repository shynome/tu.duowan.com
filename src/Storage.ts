import { required } from "./utils";

interface Item<T> {
  id: string
  val: T
}

export class Storage<T=any> {
  
  data:Item<T>[] = []
  limit:number
  storage_name:string
  
  constructor(storage_name:string,limit:number=200){

    storage_name = storage_name || required('storage name')

    // check
    let lastVal = localStorage.getItem(storage_name)
    if( lastVal !== null && lastVal[0] === '[' ){
      throw new Error(`storage name ${storage_name} is exist`)
    }
    
    this.storage_name = storage_name
    this.data = JSON.parse(localStorage.getItem(storage_name)  || '[]')
    this.limit = limit

  }

  save(){
    let { data, limit } = this

    // filter
    data = data.filter( ({ val })=>val!==null )
    
    // length limit
    if( data.length>limit ){
      data = data.slice(limit*-1)
    }

    this.data = data
    localStorage.setItem(this.storage_name,JSON.stringify(this.data))
  }

  get = (id:string)=>{
    let item = this.data.filter(item=>item.id===id)[0]
    return item && item.val || null
  }

  set = (id:string,val:T)=>{
    this.data.filter(item=>item.id===id).forEach(item=>{
      item.val = null
    })
    this.data.push({ id, val })
    this.save()
  }

  delete(id:string){
    this.set(id,null)
  }
  
}