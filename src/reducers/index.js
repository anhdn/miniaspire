import { combineReducers } from 'redux'

import register from './register'
import bank from './bank'

export default combineReducers({
  register,
  bank
})
