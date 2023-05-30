import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App/Import.scss'
import ReactDOM from 'react-dom/client';
import i18n from '../src/translate/Translate'
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './redux/store';
import CustomToastContainer from './components/ToastCont';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      <CustomToastContainer />
    </QueryClientProvider>
  </Provider>
  );
