import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

import { authRequest } from 'modules/login/actions';

import { AuthForm } from 'components';

import { AuthSchema } from './validate';

interface IFormValues {
  login: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (values: IFormValues): Promise<void> => {
      setIsFetching(true);
      try {
        await dispatch(authRequest(values));
      } catch (e) {
        toast.error('Login/password is invalid');
      } finally {
        setIsFetching(false);
      }
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
