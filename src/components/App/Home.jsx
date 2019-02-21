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
    if (this.keyWords && this.state.selectedOption) {
      $('#loader').css({display: 'block'})
      const keyWords = this.keyWords
      const typeMaterial = this.state.selectedOption.value
      this.props.dispatch(actions.search(keyWords, typeMaterial))
    }
  }

  render() {
    const { selectedOption } = this.state

    if (this.props.len !== 0) {
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

          <ContainerLoader id='loader'>
            <div className={styles.loader}>Loading...</div>
          </ContainerLoader>
        </Container>
      )
    }
  }
}

function mapStateToProps (state, props) {
  const len = state.articles.length
  return {
    len
  }
}

export default connect(mapStateToProps)(Home)
