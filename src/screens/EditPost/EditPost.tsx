import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Formik } from 'formik';
import Loader from 'react-loader-spinner';

import { getPostById } from 'modules/posts/selectors';
import { fetchPosts } from 'modules/posts/actions';

import { PostForm } from 'components';

import { EditPostSchema } from './validate';

import { Wrapper, Title } from './styled';

interface IFormValues {
  title: string;
  author: string;
  body: string;
}

const EditPost: React.FC<RouteComponentProps<{ id: string }>> = props => {
  console.log(props);

  const {
    match: {
      params: { id },
    },
  } = props;

  const dispatch = useDispatch();
  const post = useSelector(getPostById(+id));

  console.log(post);

  const handleSubmit = useCallback((values: IFormValues): void => {
    console.log(values);
  }, []);

  useEffect(() => {
    if (!post) {
      dispatch(fetchPosts());
    }
  }, [dispatch, post]);

  return (
    <Wrapper>
      {post?.id ? (
        <React.Fragment>
          <Title>Edit post</Title>
          <Formik
            initialValues={post}
            onSubmit={handleSubmit}
            component={PostForm}
            validationSchema={EditPostSchema}
          />
        </React.Fragment>
      ) : (
        <Loader width={240} height={240} type='Oval' color='black' />
      )}
    </Wrapper>
  );
};

export { EditPost };
