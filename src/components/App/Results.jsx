import React , { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../../actions'
import $ from 'jquery'
import Nav from './Nav'
import {Container, Content, ContentKey, ContentSelect, Label, Logo,
  Keywords, Button, Form, ContainerLoader} from '../../styles'


class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
    }
  }

  render() {
    return (
      <Fragment>
        <Nav />
        <p>
          {this.props.articles[0].title}
        </p>
      </Fragment>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(Results)
