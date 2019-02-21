export default { admin, getAuthorities, authorities, deleteAuthority, candidate,
  voterRegister, verification, deleteVoter, getVoters, sendFile, getCandidates,
  accessVote, vote, accessJury, changeSign, recoverPassword, exit, deleteCandidate,
  sendDate, getDate }

// const baseUrl = 'http://10.2.33.88:5000'
const baseUrl = 'http://localhost:3000'

function admin (admin) {
  console.log("%cADMIN", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/admin/login`
    const body = {
      user: admin.user,
      password: admin.password
    }
    console.log(url)
    console.log(body)
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request admin ok')
          return response.json()
        } else { console.log('Error in request admin:', response) }
      })
      .then(data => {
        console.log(data)
        if (data.authorized === true) {
          dispatch({ type: 'SET_ADMIN', admin: true })
          dispatch({ type: 'SET_ADMIN_NAME', adminName: admin.user })
        } else {
          dispatch({ type: 'SET_ERROR_ADMIN', adminError: true })
        }
      })
      .catch(err => {
        console.log('%cError in response admin:', "color: #CC0000;", err)
      })
  }
}


function getDate () {
  console.log("%cGET DATE", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/admin/date`
    const miInit = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request admin ok')
          return response.json()
        } else { console.log('Error in request admin:', response) }
      })
      .then(data => {
        console.log(data)
        // dispatch({ type: 'SET_DATE', date: true })
      })
      .catch(err => {
        console.log('%cError in response admin:', "color: #CC0000;", err)
      })
  }
}


function sendDate (date) {
  console.log("%cSEND DATE", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/admin/date`
    const body = { ...date}
    console.log(body)
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request sendDate ok')
          return response.json()
        } else { console.log('Error in request sendDate:', response) }
      })
      .then(data => {
        console.log(data)
        
      })
      .catch(err => {
        console.log('%cError in response sendDate:', "color: #CC0000;", err)
      })
  }
}


function getAuthorities () {
  console.log("%cGET AUTHORITIES", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/admin/jury`
    const miInit = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request getAuthorities ok')
          return response.json()
        } else { console.log('Error in request getAuthorities:', response) }
      })
      .then(data => {
        const listAuth = data.data
        console.log(listAuth)
        dispatch({type: 'SET_NUMBER_ITEMS', data: {
          'type': 'jury',
          'number': listAuth.length}
        })
        dispatch({ type: 'SET_AUTHORITIES', listAuth })
      })
      .catch(err => console.log('%cError in response getAuthorities:', "color: #CC0000;", err))
  }
}


function authorities (user, password, type, number) {
  console.log("%cAUTHORITIES", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/admin/jury`
    const body = {user, password, type, number_votes: number}
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    console.log(body)
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request authorities ok')
          return response.json()
        } else { console.log('Error in request authorities:', response) }
      })
      .then(data => {
        console.log(data)
        if(data.created) {
          const listAuth = data.data
          dispatch({ type: 'SET_AUTHORITIES', listAuth })
        }
      })
      .catch(err => console.log('%cError in response authorities:', "color: #CC0000;", err))
  }
}


function deleteAuthority (id) {
  console.log("%cDELETE AUTHORITY", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/admin/jury`
    const body = {id}
    const miInit = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    console.log(body)
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request deleteAuthority ok')
          return response.json()
        } else { console.log('Error in request deleteAuthority:', response) }
      })
      .then(data => {
        console.log(data)
        if(data.updated) {
          const listAuth = data.data
          dispatch({ type: 'SET_AUTHORITIES', listAuth })
        }
      })
      .catch(err => console.log('%cError in response deleteAuthority:', "color: #CC0000;", err))

  }
}


function getVoters () {
  console.log("%cGET VOTERS", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/admin/getVoters`
    const miInit = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request getVoters ok')
          return response.json()
        } else { console.log('Error in request getVoters:', response) }
      })
      .then(data => {
        const listVoter = data.data
        dispatch({type: 'SET_NUMBER_ITEMS', data: {
          'type': 'voter',
          'number': listVoter.length}
        })
        dispatch({ type: 'SET_VOTERLIST', listVoter })
      })
      .catch(err => console.log('%cError in response getVoters:', "color: #CC0000;", err))
  }
}


function sendFile (name, file, origin) {
  console.log("%cSEND FILE", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/admin/sendFile`
    const body = { name, file, origin }
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    console.log(file)
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request sendFile ok')
          return response.json()
        } else { console.log('Error in request sendFile:', response) }
      })
      .then(data => {
        console.log(data)
        
      })
      .catch(err => {
        console.log('%cError in response sendFile:', "color: #CC0000;", err)
      })
  }
}


function voterRegister(user, password) {
  // Lista de votantes registrados
  console.log("%cVOTER REGISTER", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
        const url = `${baseUrl}/admin/voterRegister`
    const body = {user, password}
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    console.log(body)
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request voterRegister ok')
          return response.json()
        } else { console.log('Error in request voterRegister:', response) }
      })
      .then(data => {
        console.log(data)
        if (data.created) {
          const listVoter = data.data
          dispatch({ type: 'SET_VOTERLIST', listVoter })
        }
      })
      .catch(err => console.log('%cError in response voterRegister:', "color: #CC0000;", err))
  }
}


function deleteVoter (id) {
  console.log("%cDELETE VOTER", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/admin/deleteVoter`
    const body = {id}
    const miInit = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    console.log(body)
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request deleteVoter ok')
          return response.json()
        } else { console.log('Error in request deleteVoter:', response) }
      })
      .then(data => {
        console.log(data)
        if(data.updated) {
          const listVoter = data.data
          dispatch({ type: 'SET_VOTERLIST', listVoter })
        }
      })
      .catch(err => console.log('%cError in response deleteVoter:', "color: #CC0000;", err))

  }
}


function getCandidates () {
  console.log("%cGET CANDIDATES", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/admin/getCandidates`
    const miInit = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request getCandidates ok')
          return response.json()
        } else { console.log('Error in request getCandidates:', response) }
      })
      .then(data => {
        const candidates = data.data
        dispatch({type: 'SET_NUMBER_ITEMS', data: {
          'type': 'candidates',
          'number': candidates.length}
        })
        dispatch({ type: 'SET_CANDIDATES', candidates })
      })
      .catch(err => console.log('%cError in response getCandidates:', "color: #CC0000;", err))
  }
}


function candidate (candidate) {
  console.log("%cCANDIDATE", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/admin/createOption`
    const body = { 
      name: candidate.name,
      sentence: candidate.sentence,
      photo: candidate.photo
    }
    console.log(body)
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request candidate ok')
          return response.json()
        } else { console.log('Error in request candidate:', response) }
      })
      .then(data => {
        console.log(data)
          if (data.created) {
            const candidates = data.data
            dispatch({ type: 'SET_CANDIDATES', candidates })
          }
      })
      .catch(err => console.log('%cError in response candidate:', "color: #CC0000;", err))
  }
}


function deleteCandidate (id) {
  console.log("%cDELETE CANDIDATE", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/admin/deleteCandidate`
    const body = {id}
    const miInit = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    console.log(body)
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request deleteCandidate ok')
          return response.json()
        } else { console.log('Error in request deleteCandidate:', response) }
      })
      .then(data => {
        console.log(data)
        if(data.updated) {
          const candidates = data.data
          dispatch({ type: 'SET_CANDIDATES', candidates })
        }
      })
      .catch(err => console.log('%cError in response deleteCandidate:', "color: #CC0000;", err))

  }
}


function verification (block) {
  console.log("%cVERIFICATION", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/verification`
    const body = {numberBlock: block}
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request verification ok')
          return response.json()
        } else { console.log('Error in request verification:', response) }
      })
      .then(data => {
        console.log(data)
          
        if (data.created) {
          dispatch({ type: 'SET_VERIFICATION', verification: 'show' })
        } else {
          dispatch({ type: 'SET_VERIFICATION', verification: 'error' })
        }
      })
      .catch(err => console.log('%cError in response verification:', "color: #CC0000;", err))
  }
}


function accessVote (email, password) {
  console.log("%cACCESS VOTE", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/vote/access`
    const body = {email, password}
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request accessVote ok')
          return response.json()
        } else { console.log('Error in request accessVote:', response) }
      })
      .then(data => {
        console.log(data)
          
        if (data.authorized) {
          const candidates = data.data
          dispatch({ type: 'SET_ACCESS_VOTE', accessVote: true })
          dispatch({ type: 'SET_AUTHERROR', authError: false })
          dispatch({ type: 'SET_CANDIDATES', candidates })
        } else {
          dispatch({ type: 'SET_ACCESS_VOTE', accessVote: false })
          dispatch({ type: 'SET_AUTHERROR', authError: true })
        }

      })
      .catch(err => console.log('%cError in response accessVote:', "color: #CC0000;", err))
  }
}


function vote (candidate) {
  // maneja los votos
  console.log("%cVOTE", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/vote/register`
    const body = {candidate}
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request vote ok')
          return response.json()
        } else { console.log('Error in request vote:', response) }
      })
      .then(data => {
        console.log(data)
          const certificate = {
            block: data.number_block,
            certificate: data.nonce,
            sign: data.hash
          }
          dispatch({ type: 'SET_VOTE', success: data.success })
          dispatch({ type: 'SET_CERTIFICATE', certificate })
      })
      .catch(err => console.log('%cError in response vote:', "color: #CC0000;", err))
  }
}


function accessJury (user, password) {
  console.log("%cACCESS JURY", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/jury/access`
    const body = {user, password}
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    console.log(body)
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request accessJury ok')
          return response.json()
        } else { console.log('Error in request accessJury:', response) }
      })
      .then(data => {
        console.log(data)
        if (data.authorized) {
          dispatch({ type: 'SET_JURY_VALID', juryValid: true })
          dispatch({ type: 'SET_JURY_ID', idJury: data.id })
        } else {
          dispatch({ type: 'SET_AUTHERROR', authError: true })
        }
          
      })
      .catch(err => console.log('%cError in response accessJury:', "color: #CC0000;", err))
  }
}


function changeSign (sign, idJury) {
  console.log("%cCHANGE SING", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/jury/changeSign`
    const body = {sign, idJury}
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request changeSign ok')
          return response.json()
        } else { console.log('Error in request changeSign:', response) }
      })
      .then(data => {
        console.log(data)
        
      })
      .catch(err => console.log('%cError in response changeSign:', "color: #CC0000;", err))
  }
}


function recoverPassword (email) {
  console.log("%cRECOVER PASSWORD", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    const url = `${baseUrl}/jury/recoverPassword`
    const body = {email}
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    console.log(body)
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request recoverPassword ok')
          return response.json()
        } else { console.log('Error in request recoverPassword:', response) }
      })
      .then(data => {
        console.log(data)
          
      })
      .catch(err => console.log('%cError in response recoverPassword:', "color: #CC0000;", err))
  }
}


function exit () {
  console.log("%cEXIT", "color: #3465A4; font-weight: bold;" )
  return function (dispatch) {
    dispatch({ type: 'SET_ADMIN', admin: false })
    dispatch({ type: 'SET_ERROR_ADMIN', adminError: false })
    dispatch({ type: 'SET_ADMIN_NAME', adminName: '' })
  }
}
