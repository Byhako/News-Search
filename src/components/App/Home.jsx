import React , { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Select from 'react-select'
import logo from '../../images/logo.jpg'
import { options } from './options'
import actions from '../../actions'
import $ from 'jquery'

import styles from '../../styles/loader.module.css'
import {Container, Content, ContentKey, ContentSelect, Label, Logo,
  Keywords, Button, Form, ContainerLoader} from '../../styles'


class Home extends Component {
  constructor(props) {
    super(props)
    this.keyWords = ''  
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

  render() {
    const { selectedOption } = this.state

    if (this.props.articles.length !== 0) {
      return (
        <Redirect to='/results' />
      )
    } else {
      return (
        <Container>
          <Logo src={logo} alt="logo"/>

          <Form>
            <ContentKey>
              <Label htmlFor="keyWords">Keywords</Label>
              <Keywords
                style={{height: '38px'}}
                type="text" id="keyWords" 
                onChange={this.handleKeywords} />
            </ContentKey>
            <ContentSelect>
              <Label htmlFor="select">Type of Material</Label>
              <Select
                id="select"
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
            </ContentSelect>
            <Content>
              <Button type='button' onClick={this.handleSearch}>Search</Button>
            </Content>
          </Form>

          {this.props.number === 0 ? (
            <p>No hay resuldatos.</p>
          ) : (
            <ContainerLoader id='loader'>
              <div className={styles.loader}>Loading...</div>
            </ContainerLoader>
          )}
        </Container>
      )
    }
  }
}

function mapStateToProps (state, props) {
  return {
    articles: state.articles,
    number: state.number
  }
}

export default connect(mapStateToProps)(Home)
