import anime from 'animejs/lib/anime.es'

function splitHeroTitle (selector) {
  const element = document.querySelector(selector)

  element.innerHTML = element.textContent.replace(/\S/g, "<span class='inline-block'>$&</span>")
}

export function animateHeroTitle (selector) {
  splitHeroTitle(selector)

  anime({
    targets: `${selector} span`,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  })
}