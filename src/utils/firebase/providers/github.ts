/* eslint-disable @typescript-eslint/camelcase */
import envVars from '@Env'
import { AuthSession } from 'expo'

const REDIRECT_URL = AuthSession.getRedirectUrl()

const { GITHUB } = envVars()

const SCOPES = ['user']

const AUTHORIZE_URL = 'https://github.com/login/oauth/authorize'
const ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token'

const authUrl = () => {
  const url = new URL(AUTHORIZE_URL)
  url.searchParams.append('client_id', GITHUB.CLIENT_ID)
  url.searchParams.append('redirect_uri', REDIRECT_URL)
  url.searchParams.append('scope', SCOPES.join(' '))
  return url.href
}

export type GitHubAccessTokenResponse = {
  access_token: string
  scope: string
  token_type: string
}

const getAccessTokenFromCode = async (
  code: string,
): Promise<GitHubAccessTokenResponse> => {
  const url = new URL(ACCESS_TOKEN_URL)
  url.searchParams.append('client_id', GITHUB.CLIENT_ID)
  url.searchParams.append('client_secret', GITHUB.CLIENT_SECRET)
  url.searchParams.append('code', code)
  const response = await fetch(url.href, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  return response.json()
}

type AuthSessionResult = {
  type: 'error' | 'success' | 'cancel' | 'dismiss' | 'locked'
  errorCode: string | null
  params: {
    [key: string]: string
  }
  url: string
}

export const getGitHubToken = async () => {
  try {
    const { type, params } = (await AuthSession.startAsync({
      authUrl: authUrl(),
    })) as AuthSessionResult

    if (type !== 'success') {
      throw new Error(type)
    }

    const { access_token } = await getAccessTokenFromCode(params.code)

    return access_token
  } catch ({ message }) {
    throw new Error(message)
  }
}
