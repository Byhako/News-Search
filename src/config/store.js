import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import Reducer from '../reducers/Reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const logger = createLogger()
const middleware = [ReduxThunk] //, logger]

export const initialState = {
  admin: false,
  adminError: false,
  adminName: '',
  verification: false,
  candidates: [],
  authorities: [],
  listVoter: [],
  numberCandidates: '',
  numberVoter: '',
  numberJury: '',
  date: '',
  authError: false,
  accessVote: false,
  vote: false,
  juryValid: false,
  block: {
    number: 123,
    vote: 'Pepito Perez',
    sign: 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
  },
  certificate: {},
  idJury: null,
}

const store = createStore(
  Reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
