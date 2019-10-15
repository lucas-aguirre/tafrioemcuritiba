/*
 * Ta frio em Curitiba?
 * João Alberto Martins de Oliveira
 */

(function (window, document) {
  const APIKEY = '646ce248e546f9da4b05c47df7c7ce15'
  const CITY = 'Curitiba'
  const API = `http://api.weatherstack.com/current?access_key=${APIKEY}&query=${CITY}`
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
      .catch(() => {
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

      return
    }

    if (response.current.temperature > 15) {
      answer.text.innerText = 'Não'
      answer.emoji.innerText = '😞'

      return
    }

    answer.text.innerText = 'Sim'
    answer.emoji.innerText = '😀'
  }

  /*
   * Init
   */
  getData()
})(window, document)
