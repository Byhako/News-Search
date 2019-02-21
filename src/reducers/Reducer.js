export default Reducer

function Reducer (state, action) {
  const reducer = ({
    SET_ARTICLES,
  })[action.type]

  return (reducer && reducer(state, action)) || state
}

function SET_ARTICLES (state, action) {
  return { ...state, articles: action.articles }
}
