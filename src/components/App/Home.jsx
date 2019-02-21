import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../../actions'



function Home () {
  return (
    <div>
      hola
    </div>
  )
}


export default connect()(Home)