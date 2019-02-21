import React , { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../../actions'
import Nav from './Nav'
import Cards from './Cards'
import $ from 'jquery'

import styles from '../../styles/loader2.module.css'
import {Button, Footer, ContainerLoader} from '../../styles'


class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
      count: 1
    }
  }


  MoreNews = () => {
    $('#loader2').css({display: 'block'})
    let count = this.state.count
    this.props.dispatch(actions.search(
      this.props.keyWords, this.props.typeMaterial,
      count, true )
    )
    count++
    setTimeout(() => {
      this.setState({count})
      $('#loader2').css({display: 'none'})
    }, 2000)

  }

  render() {
    if (this.props.articles.length === 0) {
      return (
        <Redirect to='/' />
      )
    } else {
      return (
        <Fragment>
          <Nav />
          {this.props.articles.map((article, index) => (
            <Cards key={index} article={article}/>
          ))}
          <div style={{height: '100px'}}/>
          <Footer>
            <div style={{marginRight: '150px'}}>
              <p style={{margin: '0'}}>Displaying&nbsp;
                {this.props.articles.length} results of {this.props.number} found.
              </p>
              <Button footer onClick={this.MoreNews}>Get More News</Button>
            </div>
            <ContainerLoader id='loader2'>
              <div className={styles.loader}>Loading...</div>
            </ContainerLoader>
          </Footer>

        </Fragment>
      )
    }
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
