import React , { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../../actions'
import $ from 'jquery'

import {Container, Content, ContentKey, ContentSelect, Label, Logo,
  Keywords, Button, Form, ContainerLoader} from '../../styles'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
    }
  }

  render() {
    return (
      <div>articles</div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(Home)
