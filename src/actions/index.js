export default { search }

const staticUrl = 'https://static01.nyt.com/'
const baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=​'
const apiKey = 'X58UrRVXDS0hbEc7QmE1L0c1dsILI5A8'

function search (keyWords, typeMaterial, page=0, more=false) {
  console.log("%cSEARCH", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const words = keyWords.replace(' ','+')
    
    const url = `${baseUrl}${words}&fq=type_of_material:("${typeMaterial}")&page=${page}&api-key=${apiKey}`
    const miInit = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    }
    // console.log(url)
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request search ok')
          return response.json()
        } else { console.log('Error in request search:', response) }
      })
      .then(data => {
        const response = data.response.docs
        const number = data.response.meta.hits
        const articles = response.map(article => {
          let image = null
          if (article.multimedia.length !== 0) {
            image = staticUrl + article.multimedia[0].url
          }
          let keyWords = []
          const keywords = article.keywords
          let ban = 0
          while (ban<3) {
            if (keywords[ban]) {
              keyWords.push(keywords[ban].value)
            } else { break }
            ban++
          }
          return {
            web: article.web_url,
            title: article.headline.main,
            snippet: article.snippet,
            source: article.source,
            published: article.pub_date,
            image,
            keyWords
          }
        })
        if (more) {
          dispatch({ type: 'SET_MORE_ARTICLES', articles })
        } else {
          dispatch({ type: 'SET_NUMBER_ARTICLES', number })
          dispatch({ type: 'SET_ARTICLES', articles })
        }
      })
      .catch(err => console.log('%cError in response search:', "color: #CC0000;", err))
  }
}
