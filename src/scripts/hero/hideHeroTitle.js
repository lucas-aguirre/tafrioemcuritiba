import anime from 'animejs/lib/anime.es'

export function hideHeroTitle (selector) {
  anime({
    targets: `${selector} span`,
    opacity: [1, 0],
    easing: 'easeOutExpo',
    duration: 3000,
    delay: 1000
  })
}