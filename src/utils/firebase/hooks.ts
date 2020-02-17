/* eslint-disable import/prefer-default-export */
import { useContext } from 'react'
import FirebaseContext from './context'

export const useFirebase = () => useContext(FirebaseContext)
