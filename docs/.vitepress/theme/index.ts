import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'

import { globalComponents } from "../components";
import "./custom.css";
import "../styles/index.scss";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)

    globalComponents.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  }
} satisfies Theme
