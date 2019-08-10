
const interestRate = {
  'citibank': {
    rate: '1.75'
  },
  'hsbc': {
    rate: '1.75'
  },
  'standardchartered': {
    rate: '1.75'
  }
}
const bank = {
  getInterest () {
    // call API
    return interestRate
  }
}

export default bank
