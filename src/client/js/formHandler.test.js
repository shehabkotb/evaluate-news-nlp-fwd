/**
 * @jest-environment jsdom
 */

import { formHandler } from './formHandler'

describe('form handler tests', () => {
  test('testing if correct response is shown on page', () => {
    require('jest-fetch-mock').enableMocks()

    document.body.innerHTML =
      '<main>' +
      '<section>' +
      '<strong>Form Results:</strong>' +
      '<div id="results"></div>' +
      '</section>' +
      '</main>'

    // tests if the result div is not empty
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        articleURL: {
          value:
            'https://www.nytimes.com/2021/09/23/technology/wikipedia-misinformation.html'
        }
      }
    }

    const mockResponse = {
      status: {
        code: '0',
        msg: 'OK',
        credits: '1',
        remaining_credits: '19955'
      },
      model: 'general_en',
      score_tag: 'N',
      agreement: 'AGREEMENT',
      subjectivity: 'OBJECTIVE',
      confidence: '100',
      irony: 'NONIRONIC'
    }

    fetch.mockResponseOnce(JSON.stringify({ data: mockResponse }))

    return formHandler(mockEvent).then(() => {
      expect(document.getElementById('results').innerHTML).toBeTruthy()
    })
  })
})
