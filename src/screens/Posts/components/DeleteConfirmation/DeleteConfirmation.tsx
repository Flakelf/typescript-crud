import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';

import { Button } from 'ui/components';

import { IPost } from 'modules/posts/types';
import { deletePost } from 'modules/posts/actions';

import { Wrapper, Title, Content, Footer } from './styled';

interface IDeleteConfirmationProps {
  post: IPost | null;
  onClose: () => void;
}

const DeleteConfirmation: React.FC<IDeleteConfirmationProps> = ({ post, onClose }): JSX.Element => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const contentText = !R.isEmpty(post) && `Are u sure you want to delete post with id ${post?.id}?`;

  const handleClick = useCallback(async () => {
    setIsLoading(prevState => !prevState);
    try {
      await dispatch(deletePost(1));
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(prevState => !prevState);
      toast('Post succusfully deleted !', { position: toast.POSITION.TOP_CENTER });
    }
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Delete confirmation</Title>
      <Content>
        {!isLoading ? contentText : <Loader width={130} height={130} type='Oval' color='black' />}
      </Content>
      <Footer>
        <Button onClick={onClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button onClick={handleClick} disabled={isLoading}>
          Delete
        </Button>
      </Footer>
    </Wrapper>
  );
};

export { DeleteConfirmation };
