import * as ActionType from 'actions/bank'

export const initialState = ({
  isLoading: false,
  interestRate: {}
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_INTEREST:
      return {
        isLoading: true,
        ...state
      }

    case ActionType.GET_INTEREST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        interestRate: action.payload
      }

    default:
      return state
  }
}
