/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navegation from './src/Navegation/index';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navegation);
