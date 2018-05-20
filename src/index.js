import { join } from 'lodash-es'
import './styles/styles.styl'
import bunny from './assets/img/bunny.png'

import react from 'react'
import reactDom from 'react-dom'

function component () {
  var element = document.createElement('div')

  // loadash is now imported by this script
  element.innerHTML = join(['Hello', 'Webpack'], ' ')

  // add styles that we now import in this script
  element.classList.add('hello')

  // add an image to our existing div
  var myBunny = new Image()
  myBunny.src = bunny

  element.appendChild(myBunny)

  console.log(react)
  console.log(reactDom)

  return element
}

document.body.appendChild(component())
