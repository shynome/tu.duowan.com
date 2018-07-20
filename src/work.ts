
async function fetchJsonp<T=any>(url:string){
  let res:T
  let callback_name:string = [ 'jsonp', new Date().getTime().toString(), Math.random().toString().slice(2,7) ].join('_')
  ;(global as any)[callback_name] = (data:any)=>{
    res=data
  }
  url = url+(/\?/.test(url)?'':'?')+`&callback=${callback_name}`
  await importScripts(url)
  delete (global as any)[callback_name]
  return res
}
let i=0
setInterval(function(){
  new Notification(`hello ${i++}`,{ tag:'5' })
},5000)
fetchJsonp('http://tu.duowan.com/index.php?r=api/ajaxgallerys&tag=0&page=1&pageSize=10')