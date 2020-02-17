/* eslint-disable global-require */
/* eslint-disable react-native/no-raw-text */
import image from '@Assets/user-guest.jpg'
import { AccountNavigationProp } from '@Navigation/tabs/tabs'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button } from 'react-native-paper'
import styled from 'styled-components/native'

const Body = styled.ScrollView`
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
`

const Image = styled.Image`
  height: 300px;
  width: 100%;
  margin-bottom: 40px;
`

const Title = styled.Text`
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 10px;
  text-align: center;
`

const Description = styled.Text`
  text-align: center;
  margin-bottom: 20px;
`

const ViewBtn = styled.View`
  flex: 1;
  align-items: center;
`

const GoToLoginBtn = styled(Button)`
  width: 70%;
`

const Guest = () => {
  const { navigate } = useNavigation<AccountNavigationProp>()
  return (
    <Body centerContent>
      <Image source={image} resizeMode="contain" />
      <Title>Look up your profile</Title>
      <Description>
        What is the best restaurant you like the most? Search and show easily
        best restaurants, vote for which you prefer and comment about your
        experience.
      </Description>
      <ViewBtn>
        <GoToLoginBtn onPress={() => navigate('Login')} mode="contained">
          Show your profile
        </GoToLoginBtn>
      </ViewBtn>
    </Body>
  )
}

export default Guest
