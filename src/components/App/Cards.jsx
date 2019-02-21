import React , { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../../actions'
import $ from 'jquery'
import {} from '../../styles'

import { Container, Photo, Content, Title, Snippet, 
  Source, Published, KeyWords} from '../../styles/cards'

class Cards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
    }
  }

  render() {
    const data = this.props.article
    return (
      <Container>
        <Photo src={data.image} alt="image"/>
        <Content>
          <Title href={data.web}>{data.title}</Title>
          <Snippet>{data.snippet}</Snippet>
          <Source><b>Source:&nbsp;</b>{data.source}</Source>
          <Published><b>Published:&nbsp;</b>{data.published}</Published>
          {data.keyWords.map((word, i) => (
            <Fragment>
              <KeyWords key={i}>{word},</KeyWords>&nbsp;&nbsp;&nbsp;  
            </Fragment>
          ))}
        </Content>
      </Container>
    )
  }
}

function mapStateToProps (state, props) {
  return {
  }
}

export default connect(mapStateToProps)(Cards)
