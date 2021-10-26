import Dialog from './index.vue'

export default {
  install (Vue) {
    console.log('aaa')
    Vue.prototype.$alert = () => {
      const ComponentClass = Vue.extends(Dialog)
      const component = new ComponentClass()
      component.$mount()
    }
  }
}
