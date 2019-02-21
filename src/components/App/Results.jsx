import React , { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../../actions'
import $ from 'jquery'
import Nav from './Nav'
import Cards from './Cards'

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
        {this.props.articles.map((article, index) => (
          <Cards key={index} article={article}/>
        ))}
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
