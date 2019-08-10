import React, { PureComponent } from 'react'
import styled from 'styled-components'

const LayoutContainer = styled.div`
  background: #FAFAFA;
`
const ContainerContent = styled.div`
  padding-top: 100px;
`
const HeaderComponent = styled.header`
  top: 0px;
  width: 100%;
  height: 70px;
  display: flex;
  z-index: 100;
  padding: 0px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  justify-content: center;
`
const ImgLogo = styled.img`
  margin-top: 20px;
  width: 120px;
`

export default class Layout extends PureComponent {
  render () {
    return (
      <LayoutContainer className='layout'>
        <HeaderComponent>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-5'>
                <a href='https://weaspire.sg/'>
                  <ImgLogo src='https://weaspire.sg/static/images/aspire-green.svg' alt='aspire logo' />
                </a>
              </div>
            </div>
          </div>
        </HeaderComponent>
        <ContainerContent className='container main-container'>
          { this.props.children }
        </ContainerContent>
      </LayoutContainer>
    )
  }
}
