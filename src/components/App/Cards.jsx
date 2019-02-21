import React , { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

import { Container, Photo, Content, Title, Snippet, 
  Source, Published, KeyWords, ContainerPhoto} from '../../styles/cards'

class Cards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
    }
  }

  searchKeyWord = (e) => {
    const keyWord = e.target.dataset.word
    this.props.dispatch(actions.search(keyWord, this.props.typeMaterial))
  }

  render() {
    const data = this.props.article
    return (
      <Container>
        <ContainerPhoto>
          <Photo src={data.image} alt="image"/>
        </ContainerPhoto>
        <Content>
          <Title href={data.web}>{data.title}</Title>
          <Snippet>{data.snippet}</Snippet>
          <Source><b>Source:&nbsp;</b>{data.source}</Source>
          <Published><b>Published:&nbsp;</b>{data.published}</Published>
          {data.keyWords.map((word, i) => (
            <Fragment key={i}>
              <KeyWords 
                key={i}
                data-word={word}
                onClick={this.searchKeyWord}
              >{word},</KeyWords>&nbsp;&nbsp;  
            </Fragment>
          ))}
        </Content>
      </Container>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    typeMaterial: state.typeMaterial
  }
}

export default connect(mapStateToProps)(Cards)
