// Importa los componentes y estilos necesarios
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MusicPlayer from './components/MusicPlayer';

// Definición del componente principal de la aplicación
export default function App() {
  return (
    // Contenedor principal que envuelve la aplicación
    <View style={styles.container}>
      {/* Fondo de pantalla */}
      <Image
        source={require('./assets/images/background.jpg')} // Cambia la ruta a tu imagen de fondo
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      {/* Componente del reproductor de música */}
      <MusicPlayer />
    </View>
  );
}

// Estilos de la aplicación
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});


