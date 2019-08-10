import Immutable from 'immutable'
import * as ActionType from 'actions/register'

export const initialState = Immutable.fromJS({
  isLoading: false,
  registerStatus: false
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.SUBMIT_LOAN:
      return state.set('isLoading', true)

    case ActionType.SUBMIT_LOAN_SUCCESS:
      return state.merge(
        Object.assign({}, action.payload, {
          isLoading: false,
          registerStatus: true
        })
      )

    default:
      return state
  }
}
