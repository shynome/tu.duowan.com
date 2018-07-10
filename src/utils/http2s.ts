export const http2s:<P>(target:P,to_replace_keys:Array<keyof P>)=>P = (item,keys)=>{
  for( let k of keys){
    if(typeof item[k] !=='string'){
      continue
    }
    // @ts-ignore
    item[k] = item[k].replace('http://','https://')
  }
  return item
}