import anime from 'animejs/lib/anime.es'

export function hideHeroLoading (selector) {
  anime({
    targets: `${selector}`,
    rotate: [-29, 90],
    easing: 'easeInQuint',
    duration: 3000,
    delay: 1000,
  })
}