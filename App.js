import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDrUZLMDWDxaTaNy-UJR0jV26LlpNZti1o',
      authDomain: 'authentication-14018.firebaseapp.com',
      databaseURL: 'https://authentication-14018.firebaseio.com',
      projectId: 'authentication-14018',
      storageBucket: '',
      messagingSenderId: '116414226195',
      appId: '1:116414226195:web:b40cb415478cd7c7'
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Login'} />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginBottom: 10
  },
});
