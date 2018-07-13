/// <reference types="react" />

declare module 'react-photoswipe' {

  interface Item {
    src: string
    w: number, h: number,
    title: string
  }

  interface ThumbBounds {
    x: number, y: number
    w: number
  }
  
  interface Options {
    /**
     * Start slide index. 0 is the first slide. Must be integer, not a string.
     */
    index: number
    getThumbBoundsFn: (index:number)=>ThumbBounds
    galleryUID: string
    pinchToClose: boolean
    /**
     * If set to false disables history module (back button to close gallery, unique URL for each slide). You can also just exclude history.js module from your build.
     */
    history: boolean
    /**
     * Close gallery when dragging vertically and when image is not zoomed. Always false when mouse is used.
     */
    closeOnVerticalDrag: boolean
  }
  interface Props {
    items: Item[]
    isOpen: boolean
    options?: { [k in keyof Options]?: Options[k] }
    onClose?: Function
    id?: string
    beforeChange?: (pswp:PhotoSwipe)=>any
    afterChange?: (pswp:PhotoSwipe)=>any
  }

  export class PhotoSwipe extends React.Component<Props> {
    getItemAt():Item
    getCurrentIndex():number
  }
}
