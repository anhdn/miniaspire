import React, {useState}  from 'react'
import styled from 'styled-components'

const BankContainer = styled.div`
  padding: 5px 5px 5px 5p;
  margin-bottom: 20px;
`
const Title = styled.h2`
color: #292a2a;
font-size: 14px;
font-weight: 600;
margin-bottom: 9px;
padding-bottom: 9px;
`
const BankSelection = ({onSelectedBank, onSelectedAmount}) => {
  const [bank, setBank] = useState('')
  const selectedBank = (bank) => {
    setBank(bank)
    onSelectedBank(bank)
  }
  const getAmount = (e) => {onSelectedAmount(e.target.value)}

  return (
      <BankContainer>
        <Title>Choose a bank</Title>
        <div className="cc-selector">
          <input id="citibank" type="radio" name="bank" value="citibank" onClick={() => selectedBank('Citi Bank') }/>
          <label className="drinkcard-cc citibank" htmlFor="citibank"></label>
          <input id="hsbcbank" type="radio" name="bank" value="hsbcbank" onClick={() => selectedBank('HSBC') }/>
          <label className="drinkcard-cc hsbcbank" htmlFor="hsbcbank" ></label>
          <input id="standardchartered" type="radio" name="bank" value="standardchartered" onClick={() => selectedBank('Standard Chartered') } />
          <label className="drinkcard-cc standardchartered" htmlFor="standardchartered"></label>
          {bank && (<div>You selected <strong>{bank}</strong></div>)}
          <Title >Loan Amount</Title>
          <div className="form-group input-group mb-2 mr-sm-2 mb-sm-0">
              <input
                placeholder='10000 sgd'
                id="amount" type="text"
                name="amount"
                onChange={getAmount}
                className="form-control amount"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon1">sgd</span>
              </div>
        </div>
        </div>

      </BankContainer>

  )
}

export default BankSelection
