
const interestRate = {
  'citibank': {
    id: 1,
    rate: '1.75',
    name: 'Citi Bank'
  },
  'hsbc': {
    id: 2,
    code: 'citibank',
    rate: '1.75',
    name: 'HSBC'
  },
  'standardchartered': {
    id: 3,
    rate: '1.75',
    name: 'Standard Chartered'
  }
}
const bank = {
  getInterest () {
    // call API
    return interestRate
  }
}

export default bank
