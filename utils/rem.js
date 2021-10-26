const baseSize = 100
const baseWidth = 414

const setFontSize = () => {
  const windownWidth = window.innerWidth
  document.querySelector('html').style.fontSize = windownWidth / baseWidth * baseSize / 2 + 'px'
}
setFontSize()

window.addEventListener('resize', () => {
  setFontSize()
})
