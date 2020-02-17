# Forky

## Configure enviroment.ts

```ts
// src/utils/enviroment.ts
import Constants from 'expo-constants'

const common = {
  GITHUB: {
    CLIENT_ID: 'XXX-XXX-XXX',
    CLIENT_SECRET: 'XXX-XXX-XXX',
  },
  FIREBASE: {
    apiKey: 'XXX-XXX-XXX',
    authDomain: 'xxx-xxx-xxx.firebaseapp.com',
    databaseURL: 'https://xxx-xxx-xxx.firebaseio.com',
    projectId: 'xxx-xxx-xxx',
    storageBucket: 'xxx-xxx-xxx.appspot.com',
    messagingSenderId: '0000000000',
    appId: '000000000000000000000000',
    measurementId: '000000000',
  },
}

const ENV = {
  DEV: { ...common },
  STAGING: {
    ...common,
  },
  PROD: {
    ...common,
  },
}

const envVars = (
  env: 'staging' | 'prod' = Constants.manifest.releaseChannel,
) => {
  if (env === 'staging') {
    return ENV.STAGING
  }
  if (env === 'prod') {
    return ENV.PROD
  }
  return ENV.DEV
}

export default envVars
```
