import bank from 'libs/bank'

export const GET_INTEREST = Symbol('GET_INTEREST')
export const GET_INTEREST_SUCCESS = Symbol('GET_INTEREST_SUCCESS')

export function getInterest ( ) {
  return dispatch => {
    dispatch({
      type: GET_INTEREST
    })
    const interest = bank.getInterest()
    return dispatch(onGetInterest(interest))
  }
}

function onGetInterest (payload) {
  return {
    type: GET_INTEREST_SUCCESS,
    payload
  }
}
