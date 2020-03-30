import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Formik } from 'formik';

import { createPost } from 'modules/posts/actions';

import { PostForm } from 'components';
import { Button } from 'ui/components';

import { NewPostSchema } from './validate';

import { Wrapper, Title } from './styled';

interface IFormValues {
  title: string;
  author: string;
  body: string;
}

const NewPost: React.FC<RouteComponentProps> = ({ history: { push } }) => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (values: IFormValues): Promise<void> => {
      console.log(values);

      const data = {
        title: values.title,
        body: values.body,
        userId: 1, // Always will be 1
      };

      const request = await dispatch(createPost(data));

      console.log(request);
    },
    [dispatch],
  );

  return (
    <Wrapper>
      <Title>Create post</Title>
      <Formik
        initialValues={{ title: '', body: '', author: '' }}
        onSubmit={handleSubmit}
        component={PostForm}
        validationSchema={NewPostSchema}
      />
    </Wrapper>
  );
};

export { NewPost };
