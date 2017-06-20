/*
 * Ta frio em Curitiba?
 * João Alberto Martins de Oliveira
 */

(function (window, document) {
  const APIKEY = 'd5755d9701a1ad27afd26532550a12d7'
  const CITY = 'Curitiba'
  const API = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&APPID=${APIKEY}`
  const answer = {
    text: document.querySelector('.app-answer > p'),
    emoji: document.querySelector('.app-answer > span')
  }

  /*
   * Get data from weather API
   */
  function getData () {
    fetch(API)
      .then(response => response.json())
      .then((response) => {
        updateAnswer(response)
      })
      .catch((error) => {
        updateAnswer()
      })
  }

  /*
   * Update HTML
   */
  function updateAnswer (response) {
    if (response === undefined) {
      answer.text.innerText = 'Ops'
      answer.emoji.innerText = '❌'

      return false
    }

    if (response.main.temp < 15) {
      answer.text.innerText = 'Sim'
      answer.emoji.innerText = '😀'
    } else {
      answer.text.innerText = 'Não'
      answer.emoji.innerText = '😞'
    }
  }

  /*
   * Init
   */
  getData()
})(window, document)
