import React from 'react';
import { Field, FormikProps } from 'formik';

import { Input, Button } from 'ui/components';

import { Wrapper } from './styled';

interface FormValues {
  login: string;
  password: string;
}

type AuthFormTypes = FormikProps<FormValues> & { isFetching: boolean };

const AuthForm: React.FC<AuthFormTypes> = ({ errors, isFetching }) => (
  <Wrapper>
    <Field
      name='login'
      component={Input}
      required
      label='Login'
      error={errors.login}
      disabled={isFetching}
    />
    <Field
      name='password'
      component={Input}
      required
      label='Password'
      error={errors.password}
      type='password'
      disabled={isFetching}
    />

    <Button type='submit' isLoading={isFetching}>
      Sign up
    </Button>
  </Wrapper>
);

export { AuthForm };
