export default Reducer

function Reducer (state, action) {
  const reducer = ({
    SET_KEYWORDS,
    SET_TYPE_MATERIAL,
    SET_ARTICLES,
    SET_NUMBER_ARTICLES
  })[action.type]

  return (reducer && reducer(state, action)) || state
}

function SET_KEYWORDS (state, action) {
  return { ...state, keyWords: action.keyWords }
}

function SET_TYPE_MATERIAL (state, action) {
  return { ...state, typeMaterial: action.typeMaterial }
}

function SET_ARTICLES (state, action) {
  return { ...state, articles: action.articles }
}

function SET_NUMBER_ARTICLES (state, action) {
  return { ...state, number: action.number }
}

