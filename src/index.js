import { Provider} from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import BaseLayout from './components/layouts/BaseLayout';
import Favorites from './components/Favorites'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Park from './components/Park';
import Webcam from './components/Webcam';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/favorites' component={Favorites}/>
            <Route path='/webcam/:parkCode/:stateCode/:parkId' component={Webcam}/>
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);