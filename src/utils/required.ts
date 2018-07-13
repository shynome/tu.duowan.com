export const required = (name:string):any=>{
  throw new Error(`${name} is required`)
}