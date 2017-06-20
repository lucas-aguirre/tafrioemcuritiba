/*
 * Ta frio em Curitiba?
 * João Alberto Martins de Oliveira
 */

(function (window, document) {
  const APIKEY = 'cce02f3a5bf240c7869131951171904'
  const CITY = 'Curitiba'
  const API = `https://api.apixu.com/v1/current.json?key=${APIKEY}&q=${CITY}`
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

      return
    }

    if (response.current.temp_c > 15) {
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
