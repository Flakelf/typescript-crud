import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import { authRequest } from 'modules/login/actions';
import { getIsFetching } from 'modules/login/selectors';

import { AuthForm } from 'components';

import { AuthSchema } from './validate';

interface IFormValues {
  login: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(getIsFetching);

  const handleSubmit = useCallback(
    (values: IFormValues): void => {
      dispatch(authRequest(values));
    },
    [dispatch],
  );

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      validationSchema={AuthSchema}
      onSubmit={handleSubmit}
    >
      {(props): React.ReactNode => <AuthForm {...props} isFetching={isFetching} />}
    </Formik>
  );
};

export { Login };
