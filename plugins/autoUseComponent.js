export default (Vue) => {
  var context = require.context('@/components', true, /\.(vue|js)$/)
  /*
  第一个参数找一个目录
  第二个参数是否结束，
  第三个参数种什么类型的文件
  */
  const paths = context.keys()
  /*
  通过这个keys这个方法引入了所有不同的文件，
  把它当做一个函数取用传递一个路径
  */
  paths.forEach((path) => {
    const content = context(path).default
    if (typeof content !== 'function' && content.name) {
      Vue.component('al-' + content.name, content)
    } else {
      Vue.use(content)
    }
  })
}
