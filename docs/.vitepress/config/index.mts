import { defineConfig } from "vitepress";
import { mdPlugin } from "../plugins/mdPlugin";
import zhCNThemeConfig from "./theme-config/zh-CN.json";
import jaThemeConfig from "./theme-config/ja.json";
import enUSThemeConfig from "./theme-config/en-US.json";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NM UI",
  description: "二次封装element plus部分组件；常见业务组件封装",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: '/nm-ui',
  markdown: {
    config: (md) => mdPlugin(md),
  },
  locales: {
    root: { label: '简体中文', link: '/zh-CN/', themeConfig: zhCNThemeConfig },
    ja: { label: '日本語', link: '/ja/', themeConfig: jaThemeConfig },
    es: { label: 'English', link: '/en-US/', themeConfig: enUSThemeConfig },
  },

  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    // algolia: {
    //   apiKey: '377f2b647a96d9b1d62e4780f2344da2',
    //   appId: 'BH4D9OD16A',
    // },

    socialLinks: [
      { icon: "github", link: "https://github.com/jyj1202/nm-ui" },
    ],
  },
});
