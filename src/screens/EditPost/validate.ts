import * as Yup from 'yup';

export const EditPostSchema = Yup.object().shape({
  title: Yup.string().required('Required field'),
  body: Yup.string().required('Required field'),
});
