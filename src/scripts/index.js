import { animateHeroTitle, animateHeroLoading, hideHeroLoading } from './hero'

// Styles
import './styles'

window.addEventListener('DOMContentLoaded', () => {
  animateHeroTitle('#title')
  animateHeroLoading('#loading')

  setTimeout(() => {
    hideHeroLoading('#loading')
  }, 3000)
})
