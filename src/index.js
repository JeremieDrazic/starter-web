import App from './App'
import 'styles'

document.addEventListener('DOMContentLoaded', e => {
  console.log('DOM content fully loaded')

  let app = new App()
  app.init()
})
