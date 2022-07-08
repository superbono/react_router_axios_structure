import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import store from './store';
// import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import koKR from 'antd/lib/locale/ko_KR';
import RouteContainer from './routes'
// import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store} >
  // <Provider>
  <ConfigProvider locale={koKR}>
    {/* <App /> */}
    <RouteContainer />
  </ConfigProvider>
  // </Provider>
);
