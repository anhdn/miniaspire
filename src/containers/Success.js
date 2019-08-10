import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Page = styled.div`
`
const FormContainer = styled.div`
  margin: 0 auto;
  // width: 50%;
  background: #ffffff;
  margin-bottom: 32px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
  padding: 24px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  background: rgb(255, 255, 255);
`


const Success = () => {
    return (
    <Fragment>
      <Helmet>
        <title>Register Success</title>
        <meta name='description' content='Aspire register form' />
      </Helmet>

      <FormContainer className='col-md-8 col-sm-12'>
          Register loan is successful. Thank you!
      </FormContainer>

    </Fragment>
  )
}
export default Success