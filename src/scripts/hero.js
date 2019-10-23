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

export function animateHeroLoading (selector) {
  anime({
    targets: `${selector}`,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1600,
    delay: (el, i) => 500 + 30 * i
  })

  anime({
    targets: ['#react-path-106', '#react-path-107', '#react-path-108', '#react-path-109', '#react-path-110'],
    easing: 'easeInOutSine',
    duration: 600,
    opacity: [0.4, 1],
    scale: [1, 1.01],
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  })
}

export function hideHeroLoading (selector) {
  anime({
    targets: `${selector}`,
    rotate: [-29, 90],
    easing: 'easeInQuint',
    duration: 3000,
    delay: function (el, i) { return i * 250 }
  })
}
