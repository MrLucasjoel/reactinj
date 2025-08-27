import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao meu aplicativo!</Text>
      <Text styles ={styles.textWithStyle}>Este é um texto estilizado!</Text>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff0dff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWithStyle: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
    margin: 10,
  },
});
