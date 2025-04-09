import { shallowReactive, type ComponentInternalInstance } from "vue";

interface MessageInstance {
  id: number;
  vm: ComponentInternalInstance
}

class InstanceManger {
  private instances: MessageInstance[] = shallowReactive([])
  private offset: number = 20

  constructor() {

  }

  addInstance(instance: MessageInstance) {
    this.instances.push(instance)
  }

  deleteInstance(id: number) {
    const idx = this.instances.findIndex(item => item.id === id)
    this.instances.splice(idx, 1)
  }

  getInstance(id: number) {
    const curIdx = this.instances.findIndex(item => item.id === id)
    const cur = this.instances[curIdx]
    const pre = this.instances[curIdx - 1]
    return {
      cur,
      pre,
    }
  }

  getLastOffset(id: number): number {
    const pre = this.getInstance(id).pre
    if (!pre) return 0
    return pre.vm.exposed!.bottom.value
  }

  getOffsetOrSpace(id: number, offset: number): number {
    const idx = this.instances.findIndex(item => item.id === id)
    return idx > 0 ? this.offset : offset
  }
}

const instanceManger = new InstanceManger()

export {
  instanceManger
}
