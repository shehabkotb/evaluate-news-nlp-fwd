import { validateURL } from './validateURL'

function formHandler(event) {
  event.preventDefault()

  debugger

  let formText = event.target.articleURL.value
  const validURL = validateURL(formText)
  if (!validURL) {
    alert('Invalid URL, try a valid url please!!')
    return
  }

  return fetch('http://localhost:8081/analyze', {
    method: 'POST',
    body: JSON.stringify({ articleURL: formText }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      debugger

      const fieldsToDisplay = [
        'score_tag',
        'agreement',
        'subjectivity',
        'confidence',
        'irony'
      ]

      document.getElementById('results').innerHTML = ''

      for (const field of fieldsToDisplay) {
        const node = document.createElement('li')
        let textnode
        if (field === 'score_tag') {
          textnode = document.createTextNode(`Polarity: ${res[field]}`)
        } else {
          textnode = document.createTextNode(`${field}: ${res[field]}`)
        }
        node.appendChild(textnode)
        document.getElementById('results').appendChild(node)
      }
    })
    .catch((error) => alert('request failed!!'))
}

export { formHandler }
