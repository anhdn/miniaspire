import React  from 'react'
import useForm from './useForm'

import styled from 'styled-components'

const BankContainer = styled.div`
padding: 10px 10px;
margin-bottom: 20px;
`
const Title = styled.h2`
color: #292a2a;
font-size: 14px;
font-weight: 600;
margin-bottom: 9px;
`
const UserInput = ({ onSelectedUserInfo }) => {
  // eslint-disable-next-line
  const { values, handleChange, handleSubmit } = useForm(onSelectedUserInfo)

  return (
    <BankContainer>
      <Title>Tell us about yourself</Title>
      <div className='form-group'>
        <label htmlFor='businessName'>Full Legal Name :</label>
        <input
          type='text'
          className='form-control'
          id='businessName'
          placeholder='Full name as per your ID card'
          onChange={handleChange}
          value={values.businessName || ''}
          name='businessName'
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='phoneNumber'>Mobile Phone*</label>
        <div className='input-group mb-2 mr-sm-2 mb-sm-0'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='basic-addon1'>+65</span>
          </div>
          <input
            type='text'
            className='form-control'
            id='phoneNumber'
            name='phoneNumber'
            placeholder='91234567'
            onChange={handleChange}
            value={values.phoneNumber || ''}
            required
          />
        </div>
      </div>
      <div className='form-group'>
        <label htmlFor='businessNumber'>Business Registration Number (UEN)*:</label>
        <input
          type='text'
          className='form-control'
          id='businessNumber'
          name='businessNumber'
          placeholder='Fill Business Registration Number'
          onChange={handleChange}
          value={values.businessNumber || ''}
          required
        />
      </div>
    </BankContainer>
  )
}

export default UserInput
