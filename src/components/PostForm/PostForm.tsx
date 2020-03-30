import React from 'react';
import { useHistory } from 'react-router-dom';
import { Field, FormikProps } from 'formik';

import { Input, Button } from 'ui/components';

import { Form } from './styled';

interface IPostFormValues {
  title: string;
  body: string;
  author: string;
}

const PostForm: React.FC<FormikProps<IPostFormValues>> = props => {
  console.log(props);

  const { push } = useHistory();

  const { errors, isSubmitting } = props;

  return (
    <React.Fragment>
      <Button onClick={(): void => push('/posts')} disabled={isSubmitting}>
        Return to table
      </Button>

      <Form>
        <Field
          name='title'
          component={Input}
          required
          label='Title'
          error={errors.title}
          disabled={isSubmitting}
        />
        <Field
          name='body'
          component={Input}
          required
          label='Body'
          error={errors.body}
          disabled={isSubmitting}
        />
        <Field
          name='author'
          component={Input}
          required
          label='Author'
          error={errors.author}
          disabled={isSubmitting}
        />

        <Button type='submit' disabled={isSubmitting}>
          Save post
        </Button>
      </Form>
    </React.Fragment>
  );
};

export { PostForm };
