import React from 'react';
import { Route, useHistory, RouteProps, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getToken } from 'modules/login/selectors';

interface IPrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>>;
}

const PrivateRoute = ({
  component: Component,
  ...props
}: IPrivateRouteProps): React.ReactElement<RouteProps> | null => {
  const token = useSelector(getToken);
  const history = useHistory();

  if (token) {
    history.push('/');
    return null;
  }

  return <Route component={Component} {...props} />;
};

export { PrivateRoute };
