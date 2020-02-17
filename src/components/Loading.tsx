import React from 'react'
import { ActivityIndicator, Modal, Portal } from 'react-native-paper'
import styled from 'styled-components/native'

type LoadingProps = {
  visible: boolean
}

const View = styled.View`
  justify-content: center;
  align-items: center;
`

const Loading = ({ visible }: LoadingProps) => {
  return (
    <Portal>
      <Modal visible={visible} dismissable={false}>
        <View>
          <ActivityIndicator size="large" />
        </View>
      </Modal>
    </Portal>
  )
}

export default Loading
