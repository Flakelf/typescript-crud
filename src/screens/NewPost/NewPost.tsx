import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { fetchPosts, createPost } from 'modules/posts/actions';
import { getAuthors } from 'modules/posts/selectors';

import { PostForm } from 'components';

import { NewPostSchema } from './validate';
import { Wrapper, Title } from './styled';

interface IFormValues {
  title: string;
  body: string;
  userId: number;
}

const NewPost: React.FC = () => {
  const dispatch = useDispatch();
  const authors = useSelector(getAuthors);
  const { push } = useHistory();

  const handleSubmit = useCallback(
    async (values: IFormValues): Promise<void> => {
      try {
        await dispatch(createPost(values));
        toast.success('Post created succusfully');
      } catch (e) {
        toast.error('Some error occurred');
      } finally {
        push('/posts');
      }
    },
    [dispatch, push],
  );

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(fetchPosts());
    }
  }, [authors, dispatch]);

  return (
    <Wrapper>
      {authors.length === 0 ? (
        <Loader width={240} height={240} type='Oval' color='black' />
      ) : (
        <React.Fragment>
          <Title>Create post</Title>
          <Formik
            initialValues={{ title: '', body: '', userId: 1 }}
            onSubmit={handleSubmit}
            validationSchema={NewPostSchema}
          >
            {(props): React.ReactNode => <PostForm {...props} authors={authors} />}
          </Formik>
        </React.Fragment>
      )}
    </Wrapper>
  );
};

export { NewPost };
