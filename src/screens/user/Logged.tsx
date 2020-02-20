import Container from '@Components/Container'
import { useFirebase } from '@Firebase'
import Gravatar from '@krosben/react-native-gravatar'
import React from 'react'
import { Text, View } from 'react-native'
import { Button as PaperButton, Divider, List } from 'react-native-paper'
import styled from 'styled-components/native'

const Avatar = styled.View`
  margin-right: 20px;
`

const LoggedContariner = styled(Container)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.marginBottom};
`

const Name = styled.Text`
  font-weight: bold;
`

const Info = styled.View`
  min-height: 100%;
  margin-top: ${({ theme }) => theme.spacing.marginTop};
`

const ListItem = styled(List.Item)`
  background-color: white;
`

const Button = styled(PaperButton)`
  margin-top: 40px;
  margin-bottom: 40px;
`
const menu = [
  {
    title: 'Change firstname and lastname',
    icon: 'account-circle',
  },
  {
    title: 'Change Email',
    icon: 'at',
  },
  { title: 'Chage Password', icon: 'lock-reset' },
]

const Logged = () => {
  const { auth } = useFirebase()

  return (
    <Info>
      <LoggedContariner>
        <Avatar>
          <Gravatar email={auth.currentUser.email} size={200} />
        </Avatar>
        <View>
          <Name>{auth.currentUser.displayName || 'Nameless'}</Name>
          <Text>{auth.currentUser.email}</Text>
        </View>
      </LoggedContariner>
      <View>
        {menu.map(({ icon, ...rest }, index, { length }) => (
          <View key={icon}>
            <ListItem
              // eslint-disable-next-line react/jsx-props-no-spreading
              left={props => <List.Icon {...props} icon={icon} />}
              // eslint-disable-next-line react/jsx-props-no-spreading
              right={props => <List.Icon {...props} icon="chevron-right" />}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...rest}
            />
            {index < length - 1 && <Divider />}
          </View>
        ))}
      </View>
      <Button mode="text" onPress={() => auth.signOut()}>
        Sign Out
      </Button>
    </Info>
  )
}

export default Logged
