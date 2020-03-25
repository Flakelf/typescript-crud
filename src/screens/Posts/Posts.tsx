import React, { useMemo, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
import { CellProps } from 'react-table';

import { fetchPosts } from 'modules/posts/actions';
import { getPosts } from 'modules/posts/selectors';
import { IPost } from 'modules/posts/types';

import { Table, IconWrapper, Modal } from 'ui/components';
import { Delete, Pencil } from 'ui/icons';

import { DeleteConfirmation } from './components';

import { Wrapper, Title, ActionsCell } from './styled';

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const [deleting, setDeleting] = useState<IPost | null>(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { push } = useHistory();

  const handleDeleteClick = useCallback(post => {
    setDeleting(post);
    setIsModalOpened(prevState => !prevState);
  }, []);

  const columns = useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Author', accessor: 'author' },
      { Header: 'Title', accessor: 'title' },
      { Header: 'Post body', accessor: 'body' },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: Object.assign(
          ({ row: { original } }: CellProps<IPost>): JSX.Element => (
            <ActionsCell>
              <IconWrapper onClick={(): void => handleDeleteClick(original)}>
                <Delete />
              </IconWrapper>
              <IconWrapper onClick={(): void => push(`posts/edit/${original.id}`)}>
                <Pencil />
              </IconWrapper>
            </ActionsCell>
          ),
          { displayName: 'ActionsCell' },
        ),
      },
    ],
    [handleDeleteClick, push],
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Wrapper>
        {posts.length !== 0 ? (
          <React.Fragment>
            <Title>Table page</Title>
            <Table data={posts} columns={columns} />
          </React.Fragment>
        ) : (
          <Loader width={200} height={200} type='Oval' color='black' />
        )}
      </Wrapper>
      <Modal opened={isModalOpened} onClose={(): void => setIsModalOpened(false)}>
        <DeleteConfirmation post={deleting} onClose={(): void => setIsModalOpened(false)} />
      </Modal>
    </React.Fragment>
  );
};

export { Posts };
