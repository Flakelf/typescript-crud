import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login, Posts, EditPost, NewPost } from 'screens';
import { PrivateRoute } from 'components';

import routeNames from './routeNames';

const notFound: React.FC = () => <h1>Not Found</h1>;

const Router: React.FC = () => (
  <Switch>
    <Route exact path={routeNames.main} component={Login} />

    <PrivateRoute exact path={routeNames.posts} component={Posts} />

    <PrivateRoute exact path={routeNames.editPost} component={EditPost} />

    <PrivateRoute exact path={routeNames.newPost} component={NewPost} />

    <Route path={routeNames.notFound} component={notFound} />
  </Switch>
);

export { Router };
