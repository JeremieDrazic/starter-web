import { join } from 'lodash-es'
import bunny from './assets/img/bunny.png'

export default class Component {
  init () {
    let element = document.createElement('div')

    // loadash is now imported by this script
    element.innerHTML = join(['Hello', 'Webpack'], ' ')

    // add styles that we now import in this script
    element.classList.add('hello')

    // add an image to our existing div
    const myBunny = new Image()
    myBunny.src = bunny

    element.appendChild(myBunny)

    document.body.querySelector('.app').appendChild(element)
  }
}
