import logo from '@Assets/logo.png'
import React from 'react'
import styled from 'styled-components/native'

const Image = styled.Image`
  height: 180px;
  margin-top: ${({ theme }) => theme.spacing.marginTop};
`
const Logo = () => {
  return <Image source={logo} resizeMode="contain" />
}

export default Logo
