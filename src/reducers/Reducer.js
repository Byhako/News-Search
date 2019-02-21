export default Reducer

function Reducer (state, action) {
  const reducer = ({
    SET_CANDIDATES,
    SET_AUTHORITIES,
    SET_ADMIN,
    SET_ERROR_ADMIN,
    SET_VERIFICATION,
    SET_ACCESS_VOTE,
    SET_AUTHERROR,
    SET_VOTE,
    SET_CERTIFICATE,
    SET_JURY_VALID,
    SET_JURY_OFF,
    SET_ADMIN_NAME,
    SET_VOTERLIST,
    SET_JURY_ID,
    SET_NUMBER_ITEMS,
    SET_DATE
  })[action.type]

  return (reducer && reducer(state, action)) || state
}

function SET_CANDIDATES (state, action) {
  return { ...state, candidates: action.candidates }
}

function SET_DATE (state, action) {
  return { ...state, date: action.date }
}

function SET_JURY_ID (state, action) {
  return { ...state, idJury: action.idJury }
}

function SET_AUTHORITIES (state, action) {
  return { ...state, authorities: action.listAuth }
}

function SET_ADMIN (state, action) {
  return { ...state, admin: action.admin }
}

function SET_ADMIN_NAME (state, action) {
  return { ...state, adminName: action.adminName }
}

function SET_ERROR_ADMIN (state, action) {
  return { ...state, adminError: action.adminError }
}

function SET_VERIFICATION (state, action) {
  return { ...state, verification: action.verification }
}

function SET_ACCESS_VOTE (state, action) {
  return { ...state, accessVote: action.accessVote }
}

function SET_AUTHERROR (state, action) {
  return { ...state, authError: action.authError }
}

function SET_VOTE (state, action) {
  if (action.success) {
    return { ...state, vote: true }
  } else {
    return { ...state, vote: false }
  }
}

function SET_CERTIFICATE (state, action) {
  return { ...state, certificate: action.certificate }
}

function SET_JURY_VALID (state, action) {
  return { ...state, juryValid: action.juryValid }
}

function SET_JURY_OFF (state, action) {
  return { ...state, juryValid: false }
}

function SET_VOTERLIST (state, action) {
  return { ...state, listVoter: action.listVoter }
}

function SET_NUMBER_ITEMS (state, action) {
  if (action.data.type === 'voter') {
    return { ...state, numberVoter: action.data.number }
  } else if (action.data.type === 'jury') {
    return { ...state, numberJury: action.data.number }
  } else {
    return { ...state, numberCandidates: action.data.number }
  }
}