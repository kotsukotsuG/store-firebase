import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import TopPage from './pages/topPage';
import SigninPage from './pages/signinPage';
import RegisterPage from './pages/regsiterPage';
import MyPage from './pages/myPage';
import PluginPage from './pages/pluginPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <TopPage />
        </Route>
        <Route exact path="/signin">
          <SigninPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/plugins/:pluginId">
          <PluginPage />
        </Route>
        <Route exact path="/mypage">
          <MyPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
