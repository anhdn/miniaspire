import React, { useState } from 'react'
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
const TextSelection = styled.div`
margin-bottom: 10px
`
const BankSelection = ({ onSelectedBank, onSelectedAmount, bankSelected }) => {
  const [bank, setBank] = useState('')
  const selectedBank = (bank) => {
    setBank(bank)
    onSelectedBank(bank)
  }
  const getAmount = (e) => { onSelectedAmount(e.target.value) }

  return (
    <BankContainer>
      <Title>Choose a bank</Title>
      <div className='cc-selector'>
        <input id='citibank' type='radio' name='bank' value='citibank' onClick={() => selectedBank(1)} />
        <label className='drinkcard-cc citibank' htmlFor='citibank' />
        <input id='hsbcbank' type='radio' name='bank' value='hsbc' onClick={() => selectedBank(2)} />
        <label className='drinkcard-cc hsbcbank' htmlFor='hsbcbank' />
        <input id='standardchartered' type='radio' name='bank' value='standardchartered' onClick={() => selectedBank(3)} />
        <label className='drinkcard-cc standardchartered' htmlFor='standardchartered' />
        {bank && (<TextSelection>Selected <strong>{bankSelected.name} - Interest rate {bankSelected.rate}%</strong></TextSelection>)}
        <Title >Loan Amount</Title>
        <div className='form-group input-group mb-2 mr-sm-2 mb-sm-0'>
          <input
            placeholder='10000 sgd'
            id='amount' type='text'
            name='amount'
            onChange={getAmount}
            className='form-control amount'
          />
          <div className='input-group-append'>
            <span className='input-group-text' id='basic-addon1'>sgd</span>
          </div>
        </div>
      </div>

    </BankContainer>

  )
}

export default BankSelection
