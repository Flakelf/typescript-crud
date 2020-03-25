import * as Yup from 'yup';

export const AuthSchema = Yup.object().shape({
  login: Yup.string()
    .required('Required field')
    .min(4, 'Min 4 characters'),
  password: Yup.string()
    .required('Required field')
    .min(6, 'Password must contain at least 6 characters'),
});
