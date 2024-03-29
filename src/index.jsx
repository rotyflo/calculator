import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'terminal.css';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
