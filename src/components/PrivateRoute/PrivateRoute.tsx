import React from 'react';
import { Route, useHistory, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getToken } from 'modules/login/selectors';

interface IPrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  component: Component,
  ...props
}): React.ReactElement<RouteProps> | null => {
  const token = useSelector(getToken);
  const history = useHistory();

  if (token) {
    history.push('/');
    return null;
  }

  return <Route component={Component} {...props} />;
};

export { PrivateRoute };
