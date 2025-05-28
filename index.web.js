import './src/styles/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import { AppRegistry } from 'react-native';
import AppWeb from './App.web';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppWeb);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
