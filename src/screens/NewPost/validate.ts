import * as Yup from 'yup';

export const NewPostSchema = Yup.object().shape({
  title: Yup.string().required('Required field'),
  body: Yup.string().required('Required field'),
  author: Yup.string().required('Required field'),
});
