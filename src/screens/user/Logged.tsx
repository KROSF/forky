import Container from '@Components/Container'
import { useFirebase } from '@Firebase'
import React from 'react'
import { Text } from 'react-native'
import { Button } from 'react-native-paper'

const Logged = () => {
  const { auth } = useFirebase()
  return (
    <Container>
      <Text>Logged</Text>
      <Button mode="contained" onPress={() => auth.signOut()}>
        Sign Out
      </Button>
    </Container>
  )
}

export default Logged
