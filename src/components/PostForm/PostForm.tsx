import React from 'react';
import { useHistory } from 'react-router-dom';
import { Field, FormikProps } from 'formik';

import { Input, Button, Select } from 'ui/components';

import { IUser } from 'modules/posts/types';

import { Form } from './styled';

interface IPostFormValues {
  title: string;
  body: string;
  userId: number;
}

const PostForm: React.FC<FormikProps<IPostFormValues> & { authors: IUser[] }> = ({
  errors,
  isSubmitting,
  authors,
}) => {
  const { push } = useHistory();

  const options = authors?.map(author => ({
    value: author.id,
    label: author.name,
  }));

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

        <Field name='userId' component={Select} options={options} disabled={isSubmitting} />

        <Button type='submit' disabled={isSubmitting}>
          Save post
        </Button>
      </Form>
    </React.Fragment>
  );
};

export { PostForm };
