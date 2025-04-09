import { createVNode, render } from "vue";
import MessageConstructor from "./message.vue";
import { instanceManger } from "./manager";
import { type MessageOption } from "./message";

let seed:number = 0

function message(option: MessageOption) {
  const container = document.createElement('div')
  
  const id = seed++

  const onClose = () => {
    instanceManger.deleteInstance(id)
  }

  const onDestroy = () => {
    render(null, container)
  }

  const props = {
    ...option,
    id,
    onDestroy,
    onClose,
  }
  
  const vNode = createVNode(
    MessageConstructor,
    props,
    null
  )
  
  render(vNode, container)
  document.body.appendChild(container.firstElementChild!)

  instanceManger.addInstance({
    id: props.id,
    vm: vNode.component!,
  })
}

export default message

