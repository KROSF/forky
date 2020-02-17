/* eslint-disable react-native/no-raw-text */
import {
  Container,
  Loading,
  Logo,
  Submit,
  TextInput,
  Toast,
  ToastType,
} from '@Components'
import { Octicons } from '@expo/vector-icons'
import { useFirebase } from '@Firebase'
import { AccountNavigationProp } from '@Navigation/tabs/tabs'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import React, { useRef, useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Divider } from 'react-native-paper'
import styled from 'styled-components/native'
import * as Yup from 'yup'

const Line = styled(Divider)`
  margin-top: ${({ theme }) => theme.spacing.marginTop};
  margin-left: ${({ theme }) => theme.spacing.marginLeft};
  margin-right: ${({ theme }) => theme.spacing.marginRight};
  margin-bottom: ${({ theme }) => theme.spacing.marginBottom};
  background-color: ${({ theme }) => theme.colors.primary};
  height: 1px;
`

const SingUp = styled.Text`
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
`

const RegisterText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`

const GitHub = styled(Button)`
  background-color: black;
`

const initialValues = { email: '', password: '' }

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Not valid email')
    .required('Email is required field'),
  password: Yup.string()
    .required('Password is required field')
    .min(8, 'Min length is 8')
    .max(22, 'Max length is 22'),
})

const Login = () => {
  const { navigate } = useNavigation<AccountNavigationProp>()
  const { auth, signInWithGitHubPopup } = useFirebase()
  const toast = useRef<ToastType>()
  const [submitting, setSubmitting] = useState(false)

  return (
    <>
      <ScrollView>
        <Logo />
        <Container>
          <Formik<typeof initialValues>
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async ({ email, password }) => {
              try {
                await auth.signInWithEmailAndPassword(email, password)
              } catch (e) {
                toast.current.show(e.message)
                navigate('Account')
              }
            }}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <>
                <TextInput
                  value={values.email}
                  mode="outlined"
                  label={errors.email && touched.email ? errors.email : 'Email'}
                  error={(errors.email && touched.email) as boolean}
                  onChangeText={handleChange('email')}
                />
                <TextInput
                  secureTextEntry
                  value={values.password}
                  mode="outlined"
                  label={
                    errors.password && touched.password
                      ? errors.password
                      : 'Password'
                  }
                  error={(errors.password && touched.password) as boolean}
                  onChangeText={handleChange('password')}
                />
                <Submit onPress={handleSubmit} mode="contained">
                  Log in
                </Submit>
                <Loading visible={isSubmitting} />
              </>
            )}
          </Formik>
          <SingUp>
            Haven&apos;t got an account yet?{' '}
            <RegisterText onPress={() => navigate('Register')}>
              Register
            </RegisterText>
          </SingUp>
        </Container>
        <Line />
        <Container>
          <View>
            <GitHub
              mode="contained"
              uppercase={false}
              onPress={async () => {
                try {
                  setSubmitting(true)
                  await signInWithGitHubPopup()
                  navigate('Account')
                } catch ({ message }) {
                  toast.current.show(
                    message === 'cancel'
                      ? 'Login cancelled'
                      : '"Error login with GitHub. Try again later"',
                  )
                } finally {
                  setSubmitting(false)
                }
              }}
              icon={({ size, color }) => (
                <Octicons name="mark-github" size={size} color={color} />
              )}>
              Continue with GitHub
            </GitHub>
          </View>
        </Container>
        <Loading visible={submitting} />
        <Toast ref={toast} position="center" opacity={0.5} />
      </ScrollView>
    </>
  )
}

export default Login
