
import { typings } from '../config'
import { length, substring } from 'stringz'

function* typeWordIterator(string) {
  const makeForwardArray = _string => {
    // make the typer wait a little bit more at the beginning
    const array = ['', '']
    for (let i = 0; i < length(_string); i++) {
      array.push(substring(_string, 0, i + 1))
    }
    // make the typer wait a little bit more at the end
    array.push(_string)
    return array
  }

  const forward = makeForwardArray(string)

  // go forwards, type word
  for (let i = 0; i < forward.length; i++) {
    yield forward[i]
  }

  // go backwards, delete word
  for (let i = forward.length - 1; i >= 1; i--) {
    yield forward[i]
  }
}

export default function* iterator() {
  /* eslint-disable no-constant-condition */
  while (true) {
    for (const word of typings) {
      for (const typed of typeWordIterator(word)) {
        yield typed
      }
    }
  }
}
