import { Provider} from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import BaseLayout from './components/layouts/BaseLayout';
import Parks from './components/Parks'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/favorites' component={Parks}/>
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);