



export const wrapperNotification = async (title:string,options:NotificationOptions)=>{
  
  const permission =  await Notification.requestPermission()

  
  
  return new Notification(title,options)
}


export {
  wrapperNotification as Notification
}
