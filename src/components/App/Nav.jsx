import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../../actions'
import Select from 'react-select'
import logo from '../../images/logo.png'
import { options } from './options'
import $ from 'jquery'

import {Nav, Content, ContentKey, ContentSelect, Label, Logo,
  Keywords, Button, Form, ContainerLoader, ContentSearch} from '../../styles'


class NavSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
    }
  }

  handleKeywords = (e) => this.keyWords = e.target.value
  handleChange = (selectedOption) => this.setState({ selectedOption })

  handleSearch = () => {
    const keyWords = this.keyWords
    const selectedOption = this.state.selectedOption
    if (keyWords && selectedOption) {
      $('#loader').css({display: 'block'})
      const typeMaterial = this.state.selectedOption.value
      this.props.dispatch(actions.search(keyWords, typeMaterial))
      this.props.dispatch({type: 'SET_KEYWORDS', keyWords})
      this.props.dispatch({type: 'SET_TYPE_MATERIAL', typeMaterial})
    }
  }

  cleanResults = () => {
    this.props.dispatch({ type: 'SET_ARTICLES', articles: [] })
  }

  render() {
    const { selectedOption } = this.state

    return (
      <Nav>
        <Link to='/' onClick={this.cleanResults}>
          <Logo nav src={logo} alt="logo"/>
        </Link>

        <ContentKey nav>
          <Label htmlFor="keyWords">Keywords</Label>
          <Keywords
            style={{height: '38px'}}
            type="text" id="keyWords" 
            onChange={this.handleKeywords} />
        </ContentKey>
        <ContentSearch>
          <ContentSelect nav>
            <Label htmlFor="select">Type of Material</Label>
            <Select
              id="select"
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </ContentSelect>
          <Content nav>
            <Button type='button' onClick={this.handleSearch}>Search</Button>
          </Content>
        </ContentSearch>
      </Nav>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(NavSearch)
