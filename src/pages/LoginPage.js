import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.createAccountText}>Create Account</Text>
      <TextInput placeholder="Email" style={styles.emailInput} />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ea7d94',
  },
  logo: {
    width: 200,
    height: 200,
  },
  createAccountText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  emailInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 10,
  },
  loginButton: {
    width: 300,
    height: 50,
    backgroundColor: '#b35166',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 20,
    marginTop: 20,
  },
  googleButton: {
    width: 300,
    height: 50,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
};


export default LoginPage

