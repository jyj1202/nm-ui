import type { App, Component } from 'vue'

export const getInstall = (comp: Component, compName: string) => {
  return {
    install(app: App): void {
      app.component(compName, comp)
    }
  }
}
