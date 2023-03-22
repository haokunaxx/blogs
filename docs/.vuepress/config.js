module.exports = {
  base: '/blogs/',
  title: 'haokunaxx',
  description: '我要开始了！',
  theme: 'reco',
  themeConfig: {
    author: 'haokunaxx',
    logo:'./avatar.jpg',
    authorAvatar: './avatar.jpg',
    type:'blog',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'haokunaxx 的博客',
        items: [
          {
            text: '掘金',
            link: 'https://juejin.cn/user/3808364011986078'
          },
          {
            text: 'Github',
            link: 'https://github.com/haokunaxx'
          }
        ]
      }
    ],
    subSidebar: 'auto',
    blogConfig: {
      category: {
        location: 2,
        text: "博客"
      },
      tag: {
        location: 4,
        text: 'Tag'
      }
    }
    // sidebar: [
    //   {
    //     title: '欢迎学习',
    //     path: '/',
    //     collapsable: false,
    //     children: [{
    //       title: '博客简介',
    //       path: '/'
    //     }]
    //   },
    //   {
    //     title: '基础篇',
    //     path: '/blogs/1',
    //     collapsable: true,
    //     children: [{
    //       title: '第一篇',
    //       path: '/blogs/1'
    //     }, {
    //       title: '第二篇',
    //       path: '/blogs/2'
    //     }]
    //   }
    // ]
  },
  locales:{
    "/":{
      lang:'zh-CN'
    }
  }
}