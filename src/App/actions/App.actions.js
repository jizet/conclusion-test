import * as axios from 'axios'
export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const FILTER_GENDER = 'FILTER_GENDER';
export const FILTER_NAT = 'FILTER_NAT';
export const SEARCH_USER = 'SEARCH_USER';

export function getData(users) {
  return dispatch => {
    axios.get('https://randomuser.me/api/?results=5000')
    .then(
      (response) => {
      dispatch({ type: DATA_AVAILABLE, data: response.data.results });
    })
    .catch( err => console.log(`it has been an error: ${err.message}`))
  };
}

export function setFilterGender(gender) {
  return dispatch => {
    dispatch({type: FILTER_GENDER, gender: gender})
  }
}

export function setFilterNat(nat) {
  return dispatch => {
    dispatch({type: FILTER_NAT, nat: nat})
  }
}

export function searchUser(user) {
  return dispatch => {
    dispatch({type: SEARCH_USER, user: user})
  }
}
