import React from 'react'
import { Firebase } from './app'
import FirebaseContext from './context'

export type FirebaseProviderProps = {
  children: React.ReactNode
}

const FirebaseProvider = ({ children }: FirebaseProviderProps) => (
  <FirebaseContext.Provider value={Firebase}>
    {children}
  </FirebaseContext.Provider>
)

export default FirebaseProvider
