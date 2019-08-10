

export const SUBMIT_LOAN = Symbol('SUBMIT_LOAN')
export const SUBMIT_LOAN_SUCCESS = Symbol('SUBMIT_LOAN_SUCCESS')

export function submitLoan (data) {
  console.log('==> data register', data);
  // call api
  return {status:'sucess'}
}
