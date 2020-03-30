import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { toast } from 'react-toastify';

import { Button } from 'ui/components';

import { IPost } from 'modules/posts/types';
import { deletePost } from 'modules/posts/actions';

import { Wrapper, Title, Content, Footer, Loader } from './styled';

interface IDeleteConfirmationProps {
  post: IPost | null;
  onClose: () => void;
  isLoading: boolean;
  setIsLoading: (newState: boolean) => void;
}

const DeleteConfirmation: React.FC<IDeleteConfirmationProps> = ({
  post,
  onClose,
  isLoading,
  setIsLoading,
}): JSX.Element => {
  const dispatch = useDispatch();

  const contentText = !R.isEmpty(post) && `Are u sure you want to delete post with id ${post?.id}?`;

  const handleClick = useCallback(async () => {
    setIsLoading(true);
    try {
      if (post?.id) {
        await dispatch(deletePost(post.id));
      }
    } catch (e) {
      toast.error('Some error occurred');
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      toast.success('Post succusfully deleted !');
      onClose();
    }
  }, [dispatch, onClose, post, setIsLoading]);

  return (
    <Wrapper>
      <Title>Delete confirmation</Title>

      {isLoading ? (
        <Loader width={130} height={130} type='Oval' color='black' />
      ) : (
        <React.Fragment>
          <Content>{contentText}</Content>
          <Footer>
            <Button onClick={onClose} disabled={isLoading}>
              Cancel
            </Button>
            <Button onClick={handleClick} disabled={isLoading}>
              Delete
            </Button>
          </Footer>
        </React.Fragment>
      )}
    </Wrapper>
  );
};

export { DeleteConfirmation };
