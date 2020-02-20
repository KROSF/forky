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
import { useFirebase } from '@Firebase'
import { AccountNavigationProp } from '@Navigation/tabs/tabs'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import React, { useRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Not valid email')
    .required('Email is required field'),
  password: Yup.string()
    .required('Password is required field')
    .min(8, 'Min length is 8')
    .max(22, 'Max length is 22'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords should match',
  ),
})

const initialValues = { email: '', password: '', confirmPassword: '' }

export default () => {
  const { auth } = useFirebase()
  const toast = useRef<ToastType>()
  const { navigate } = useNavigation<AccountNavigationProp>()

  return (
    <ScrollView>
      <Logo />
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async ({ email, password }) => {
            try {
              await auth.createUserWithEmailAndPassword(email, password)
              navigate('Account')
            } catch (e) {
              toast.current.show(e.message)
            }
          }}>
          {({
            handleChange,
            values,
            handleSubmit,
            errors,
            touched,
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
              <TextInput
                secureTextEntry
                value={values.confirmPassword}
                mode="outlined"
                label={
                  (errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : 'Confirm Password') as string
                }
                error={
                  (errors.confirmPassword && touched.confirmPassword) as boolean
                }
                onChangeText={handleChange('confirmPassword')}
              />
              <Submit onPress={handleSubmit} mode="contained">
                Register
              </Submit>
              <Loading visible={isSubmitting} />
            </>
          )}
        </Formik>
      </Container>
      <Toast ref={toast} position="center" opacity={0.5} />
    </ScrollView>
  )
}
