import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';

import { store, history } from 'modules';
import { Layout } from 'ui/components';
import { CustomThemeProvider } from 'ui/theme';
import { GlobalStyles } from 'ui/theme/globalStyles';

import { Router } from './routeConfig';

const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <GlobalStyles />
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      <CustomThemeProvider>
        <Layout>
          <Router />
        </Layout>
      </CustomThemeProvider>
    </ConnectedRouter>
  </Provider>
);

export { App };
