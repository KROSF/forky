import React from 'react'
import { ActivityIndicator, Modal, Portal } from 'react-native-paper'
import styled from 'styled-components/native'

type LoadingProps = {
  visible: boolean
}

const Container = styled.View`
  justify-content: center;
  align-items: center;
`

export default ({ visible }: LoadingProps) => {
  return (
    <Portal>
      <Modal visible={visible} dismissable={false}>
        <Container>
          <ActivityIndicator size="large" />
        </Container>
      </Modal>
    </Portal>
  )
}
