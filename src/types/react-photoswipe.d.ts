/// <reference types="react" />

declare module 'react-photoswipe' {

  interface Item {
    src: string
    w: number, h: number,
    title: string
  }
  interface Options {
    
  }
  interface Props {
    items: Item[]
    isOpen: boolean
    options?: Options
    onClose?: Function
  }

  export class PhotoSwipe extends React.Component<Props> {}
}
