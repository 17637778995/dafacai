const scrollMixin = {
  mounted () {
    if (this.$options.onScrollBottom) {
      this.initEvent()
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollEvent)
  },
  methods: {
    initEvent () {
      window.addEventListener('scroll', this.scrollEvent)
    },
    scrollEvent (e) {
      const scrollTop = document.querySelector('html').scrollTop
      const bodyHeight = document.body.clientHeight
      const windowHeight = window.innerHeight
      if ((bodyHeight - windowHeight) * 0.98 <= scrollTop) {
        console.log('到底了')
        this.$options.onScrollBottom.call(this)
      }
    }
  }
}

export default (Vue) => {
  Vue.mixin(scrollMixin)
}
