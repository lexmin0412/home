console.log('getfiles')

const fs = require('fs')

/**
 * 扫描pages文件夹生成routes.js 即app.tsx中的pages配置项
 */
const getPages = () => {
  return new Promise((resolve, reject)=>{
    console.log('开始扫描页面')

    if ( fs.existsSync('./src/.vuepress/config.js') ) {
      fs.unlinkSync('./src/.vuepress/config.js')
      console.log('删除pages/.vuepress/config.js')
    }

    let indexLines = `module.exports = {
      title: "Lexmin0412 Blog",
      description: "All I know is that I know nothing.",
      base: "/blog/",  // basename
      port: 8021,  // 端口
      dest: 'docs',   // 打包输出文件存放的目录，默认为文档文件夹下的.vuepress/dist
      markdown: {   // markdown配置对象
        lineNumbers: true     // 是否在每个代码块的左侧显示行号
      },
      evergreen: false,   // 是否禁止esnext转译到es5以及对ie的polyfills，默认false 如果设置成true则只会支持现代浏览器
      themeConfig: {
        repo: "https://github.com/cathe-zhang/blog",
        nav: [
          {
            text: 'Taro X Blog',
            link: 'https://lexmin0412.github.io/tarox-blog/'
          }
        ],
        sidebar: [`

    let pages = []

    var outerDirs = fs.readdirSync("./src");

    outerDirs.forEach((item,index)=>{

      console.log('item', item)

      // var innerDir = fs.readdirSync(`./src/docs/${item}`)

      if ( !['images', '.vuepress', '.DS_Store', 'README.md', 'TODO.md'].includes(item) ) {

        var innerDir = fs.readdirSync(`./src/${item}`)

        indexLines = `${indexLines}
          {
            title: "${item}",
            collapsable: false,
            children: [`

  
        // 去除后缀名
        innerDir.forEach((inItem,inIndex)=>{
          if ( inItem.indexOf('.md') > -1 ) {
            const sliceRes = inItem.slice(0,inItem.indexOf('.md'))
            if ( inItem.indexOf('README') == -1 ) {
              // 去重
              if ( pages.indexOf(`${item}/${sliceRes}`) === -1 ) {
                // pages.push(`docs/${item}/${sliceRes}`)
                indexLines = `${indexLines}
                  "/${item}/${sliceRes}",`
              }
            } else {
              if ( pages.indexOf(`${item}/${sliceRes}`) === -1 ) {
                // pages.push(`docs/${item}/${sliceRes}`)
                indexLines = `${indexLines}
                  "/${item}/",`
              }
            }
          }
        })

        indexLines = `${indexLines}
            ]
          },`
  
      }
    })

    indexLines = `${indexLines}
  ],
    sidebarDepth: 2
  }
};
    `
    

    fs.writeFileSync('./src/.vuepress/config.js', indexLines)
    console.log('页面扫描完成，.vuepress/config.js创建成功')
    resolve()
  })

}

getPages()

module.exports = getPages
