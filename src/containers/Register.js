import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getInterest } from 'actions/bank'
import { submitLoan } from 'actions/register'
import BankSelection from 'components/BankSelection'
import UserInput from 'components/UserInput'
import { Button } from 'react-bootstrap'

// const Page = styled.div`
// `
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

class Register extends React.Component {
  static async getInitialProps ({ store }) {
    await store.dispatch(getInterest())
  }
  constructor (props) {
    super(props)
    // Don't call this.setState() here!
    this.state = {
      step: 1,
      bankSelected: '',
      userInfo: {}
    }
  }

  render () {
    // const { bank, register } = this.props
    const onSelectedBank = (bank) => this.setState({ bankSelected: bank })
    const onSelectedAmount = (amount) => this.setState({ amount })
    const onSelectedUserInfo = (userInfo) => (this.setState({ userInfo }))

    const handleSubmit = () => {
      const result = submitLoan({
        ...this.state.userInfo,
        bank: this.state.bankSelected,
        amount: this.state.amount
      })
      if (result.status === 'sucess') {
        Router.push('/success')
      }
    }

    return (
      <Fragment>
        <Helmet>
          <title>Aspire register</title>
          <meta name='description' content='Aspire register form' />
        </Helmet>

        <FormContainer className='col-md-8 col-sm-12'>
          <h4 className='h4 mb-4 text-center'>Loan Information</h4>
          {
            this.state.step === 1 &&
              <BankSelection onSelectedBank={onSelectedBank} onSelectedAmount={onSelectedAmount} />
          }
          {
            this.state.step === 2 &&
              <UserInput
                onSelectedUserInfo={onSelectedUserInfo}
              />
          }
          <div>
            {
              this.state.step > 1 &&
                <Button
                  className='btn btn-info'
                  onClick={() => {
                    this.setState({ step: 1 })
                  }}
                > Back</Button>
            }
            {
              this.state.step === 1 &&
                <Button
                  className='btn btn-success margin-l10'
                  onClick={() => { this.setState({ step: 2 }) }}
                > Next</Button>
            }
            { this.state.step === 2 &&
              <Button
                className='btn btn-success margin-l10'
                onClick={handleSubmit}
              > Submit</Button>
            }
          </div>
        </FormContainer>

      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    bank: state.bank,
    register: state.register
  }
}
Register.propTypes = {
  interestRate: PropTypes.object,
  getInterest: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps, {
    getInterest
  }
)(Register)
