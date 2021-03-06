import envVar from '@Env'
import firebase from 'firebase/app'
/* eslint-disable import/no-duplicates */
import 'firebase/auth'
import 'firebase/database'
import { getGitHubToken } from './providers/github'

const { FIREBASE } = envVar()

firebase.initializeApp(FIREBASE)

export const Firebase = {
  auth: firebase.auth(),
  db: firebase.database(),
  async signInWithGitHubPopup() {
    const token = await getGitHubToken()
    const credential = firebase.auth.GithubAuthProvider.credential(token)
    return firebase.auth().signInWithCredential(credential)
  },
}

export type Firebase = typeof Firebase
