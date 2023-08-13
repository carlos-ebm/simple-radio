// Importa los módulos necesarios
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper'; // Importa el componente Button de react-native-paper
import Sound from 'react-native-sound'; // Importa Sound para manejar el audio
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa el componente Icon de FontAwesome

// Definición del componente MusicPlayer
const MusicPlayer = () => {
  // Estados para controlar el audio y el estado de reproducción
  const [sound, setSound] = useState();
  const [playing, setPlaying] = useState(false);

  // Efecto para pausar y reiniciar el audio al cambiar el estado
  useEffect(() => {
    if (sound && !playing) {
      // Si hay un sonido cargado y la reproducción está pausada
      sound.pause(); // Pausa la reproducción
      sound.setCurrentTime(0); // Reinicia el tiempo de reproducción
    }
  }, [sound, playing]);

  // Función para alternar la reproducción y pausa
  const togglePlayback = () => {
    if (sound) {
      // Si ya hay un sonido cargado
      if (playing) {
        // Si la reproducción está en curso
        sound.stop(() => {
          sound.release(); // Libera los recursos del sonido
          setSound(null); // Limpia el estado del sonido
          setPlaying(false); // Cambia el estado de reproducción a pausado
        });
      } else {
        // Si la reproducción está pausada
        sound.play(() => {
          sound.release(); // Libera los recursos del sonido
          setSound(null); // Limpia el estado del sonido
          setPlaying(false); // Cambia el estado de reproducción a pausado
        });
      }
    } else {
      // Si no hay un sonido cargado
      const playlistUrl = 'https://orf-live.ors-shoutcast.at/oe3-q2a';
      const audio = new Sound(playlistUrl, '', error => {
        if (error) {
          console.log('Error loading sound:', error);
        } else {
          audio.play(() => {
            audio.release(); // Libera los recursos del sonido
            setSound(null); // Limpia el estado del sonido
            setPlaying(false); // Cambia el estado de reproducción a pausado
          });
        }
      });
      setSound(audio); // Almacena el sonido en el estado
      setPlaying(true); // Cambia el estado de reproducción a en curso
    }
  };

  // Renderización del componente
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/radio.png')} style={styles.logo} />
      {/* Botón para controlar la reproducción */}
      <Button
        mode="contained"
        onPress={togglePlayback}
        style={styles.button}
        contentStyle={styles.buttonContent}
        icon={({ color, size }) => (
          <Icon
            name={playing ? 'stop-circle' : 'play-circle'}
            size={size * 2} // Aumenta el tamaño del ícono
            color={color}
          />
        )}
      >
        {playing ? 'Detener' : 'Reproducir'}
      </Button>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  button: {
    marginTop: 20, // Ajusta el margen superior del botón
    padding: 10,
    borderRadius: 10,
  },
  buttonContent: {
    flexDirection: 'row-reverse', // Icono a la derecha del texto
  },
});

// Exporta el componente MusicPlayer
export default MusicPlayer;




