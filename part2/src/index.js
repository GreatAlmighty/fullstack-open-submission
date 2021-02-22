import React from 'react'
import ReactDom from 'react-dom'
import notes from './data/Notes'
import App from './App'

ReactDom.render(
  <App notes={notes} />,
  document.getElementById('root')
)