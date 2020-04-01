import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';

import { store } from 'modules';
import { Layout } from 'ui/components';
import { CustomThemeProvider } from 'ui/theme';
import { GlobalStyles } from 'ui/theme/globalStyles';

import { Router } from './routeConfig';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      <CustomThemeProvider>
        <Layout>
          <Router />
        </Layout>
      </CustomThemeProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
