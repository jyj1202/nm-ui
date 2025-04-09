import { createApp } from 'vue'
import 'virtual:uno.css'

type ComponentModule = Record<string, () => Promise<{ default: any }>>;

const modules = import.meta.glob('./*.vue') as ComponentModule;

const name = location.pathname.replace(/^\//, '') || 'App'
const comp = modules[`./${name}.vue`]

createApp((await comp()).default).mount('#play')
