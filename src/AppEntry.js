import { AppRegistry, Platform } from "react-native";

import Routes from "./routes";

AppRegistry.registerComponent('main', () => Routes);

if(Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('main', { rootTag });
}


// import registerRootComponent from 'expo/build/launch/registerRootComponent';

// import Routes from './routes';

// registerRootComponent(Routes);
