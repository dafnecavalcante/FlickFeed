import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const fixedEmail = 'dafne.cavalcante@gmail.com';
    const fixedPassword = '123456789';
  
    if (email !== fixedEmail || password !== fixedPassword) {
      setErrorMessage('Email ou senha incorretos');
      setEmail(''); // Limpa o campo de email
      setPassword(''); // Limpa o campo de senha
    } else {
      setErrorMessage(''); // Limpa a mensagem de erro
      console.log(`Email: ${fixedEmail}, Password: ${fixedPassword}`);
      navigation.navigate('HomeScreen');
    }
  };
  

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
      {errorMessage !== '' && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  logo: {
    width: 200,
    height: 80,
    marginBottom: 30,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default Login;
