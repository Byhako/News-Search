import React , { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../../actions'
import $ from 'jquery'
import Nav from './Nav'
import Cards from './Cards'

import {Container, Content, ContentKey, ContentSelect, Label, Logo,
  Keywords, Button, Form, ContainerLoader, Footer} from '../../styles'


class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
      count: 1
    }
  }

  MoreNews = () => {
    let count = this.state.count
    this.props.dispatch(actions.search(
      this.props.keyWords,
      this.props.typeMaterial,
      count
      )
    )
    count++
    this.setState({count})
  }

  render() {
    return (
      <Fragment>
        <Nav />
        {this.props.articles.map((article, index) => (
          <Cards key={index} article={article}/>
        ))}
        <div style={{height: '100px'}}/>
        <Footer>
          <p style={{margin: '0'}}>Displaying&nbsp;
            {this.state.count*10-9}&nbsp;to&nbsp;
            {this.state.count*10} results of {this.props.number} found.
          </p>
          <Button footer onClick={this.MoreNews}>Get More News</Button>
        </Footer>

      </Fragment>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    articles: state.articles,
    number: state.number,
    keyWords: state.keyWords,
    typeMaterial: state.typeMaterial
  }
}

export default connect(mapStateToProps)(Results)
