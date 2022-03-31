module.exports = {
    title: '马士兵前端',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        nav:[
          { text: '枫叶云笔记', link: '/tecdoc/fynote/' ,
            items: [
            { text: '枫叶云笔记', link: '/tecdoc/fynote/' },
          ]}, 
          { text: 'VUE3', link: '/vue/' ,
            items: [
            { text: '新后台管理培训手册', link: '/tecdoc/vue3/' },
          ]}, 
          { text: 'NUXT', link: '',
            items: [
            { text: '学习平台', link: '/tecdoc/nuxt/' },
          ] }, 
          { text: 'UniAPP', link: '/tecdoc/uniapp/' }, 
          { text: 'websoket', link: '/tecdoc/websoket/' }, 
          { text: '前端技术分享会', link: '/communication/' }, 
          {
            text: 'Gitlab',
            items: [
              { text: 'Gitlab地址', link: '' },
            
            ]
          }        
        ],
        sidebar: 'auto'
    },

    markdown:{
        anchor:{ permalink: true, permalinkBefore: true, permalinkSymbol: '#' }
    }
  }