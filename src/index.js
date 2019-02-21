import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))


serviceWorker.unregister()
