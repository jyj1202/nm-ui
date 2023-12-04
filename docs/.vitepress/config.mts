import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NM UI",
  description: "二次封装element plus部分组件；常见业务组件封装",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "指南", link: "/" },
      { text: "组件", link: "/component/form/input" },
      { text: "vitepress", link: "/vitepress/markdown-examples" },
    ],

    sidebar: {
      '/vitepress': [{
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/vitepress/markdown-examples" },
          { text: "Runtime API Examples", link: "/vitepress/api-examples" },
          
        ],
      },],
      '/component': [{
        text: "form",
        items: [
          { text: "Input 输入框", link: "/component/form/input" },
          { text: "Input Number 数字输入框", link: "/component/form/input-number" },
          { text: "Select 选择器", link: "/component/form/select" },
          { text: "Checkbox 多选框", link: "/component/form/checkbox" },
        ],
      },]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
