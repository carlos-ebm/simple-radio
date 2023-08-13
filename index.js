import { AppRegistry } from 'react-native'; // Importa AppRegistry de react-native
import App from './App'; // Importa el componente principal App
import { name as appName } from './app.json'; // Importa el nombre de la aplicación desde app.json

// Registra el componente App como la aplicación principal
AppRegistry.registerComponent(appName, () => App);

