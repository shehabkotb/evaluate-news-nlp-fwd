import { validateURL } from './validateURL'

describe('url validator tests', () => {
  test('testing valid url', () => {
    const testURL =
      'https://www.nytimes.com/2021/09/23/technology/wikipedia-misinformation.html'

    expect(validateURL(testURL)).toBeTruthy()
  })

  test('testing invalid url', () => {
    const testURL = 'not url'

    expect(validateURL(testURL)).toBeFalsy()
  })
})
