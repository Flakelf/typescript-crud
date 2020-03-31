import React, { useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, validateYupSchema } from 'formik';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { getPostById, getAuthors } from 'modules/posts/selectors';
import { fetchPosts, editPost } from 'modules/posts/actions';

import { PostForm } from 'components';

import { EditPostSchema } from './validate';

import { Wrapper, Title } from './styled';

interface IFormValues {
  title: string;
  body: string;
  userId: number;
}
const EditPost: React.FC<RouteComponentProps<{ id: string }>> = ({
  history: { push },
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const post = useSelector(getPostById(+id));
  const authors = useSelector(getAuthors);

  const initialValues = useMemo(
    (): IFormValues => ({
      title: post?.title,
      body: post?.body,
      userId: post?.userId,
    }),
    [post],
  );

  const handleSubmit = useCallback(
    async (values: IFormValues): Promise<void> => {
      try {
        console.log({ ...values, id });

        await dispatch(editPost({ ...values, id }));
      } catch (e) {
        toast.error('Some error occurred');
      } finally {
        toast.success('Post updated successfully');
        push('/posts');
      }
    },
    [dispatch, id, push],
  );

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
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={EditPostSchema}
          >
            {(props): React.ReactNode => <PostForm {...props} authors={authors} />}
          </Formik>
        </React.Fragment>
      ) : (
        <Loader width={240} height={240} type='Oval' color='black' />
      )}
    </Wrapper>
  );
};

export { EditPost };
