import Loading from '@Components/Loading'
import { useFirebase } from '@Firebase'
import React, { useEffect, useState } from 'react'
import Guest from './Guest'
import Logged from './Logged'

const Account = () => {
  const { auth } = useFirebase()
  const [isLogin, setLogin] = useState<boolean | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => setLogin(Boolean(user)))
  }, [auth])

  if (isLogin === null) {
    return <Loading visible />
  }

  return isLogin ? <Logged /> : <Guest />
}

export default Account
