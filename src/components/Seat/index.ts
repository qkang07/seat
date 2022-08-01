
interface IRenderParams {
  dom: HTMLElement
  emit: (ev: any) => void
  props: any
}

interface IRenderRef {
  updateProps: (props: any) => void
  destroy: () => void
}

interface IComponent {
  meta: {
    name: string
    label: string
  },
  render: (params: IRenderParams) => IRenderRef
}

function RenderSeat(comp:IComponent, params: IRenderParams){
  return comp.render(params)
}

class Seat<P extends Record<string, any> = {}> {


  instance: IRenderRef | null = null

  props?: P

  cb?: (ev: any) => any

  constructor(public comp: IComponent, public dom?: HTMLElement, props?: P){
    if(dom){
      this.mount(dom, props)
    }
  }

  mount(dom: HTMLElement, props?: P){
    this.props = props
    this.instance = this.comp.render({
      dom,
      props,
      emit: (ev: any) => {
        if(this.cb){
          this.cb(ev)
        }
      }
    })

  }

  onEmit(cb: (ev: any) => any){
    this.cb = cb
  }

  updateProps(props: P){
    if(this.instance){
      this.props = Object.assign({}, this.props, props)
      this.instance.updateProps(this.props)
    }
  }
}