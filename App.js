import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';
import { Button, Spinner } from './src/components/interaction';

export default class App extends React.Component {
  state = { loggedIn: null };

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Login'} />
        {this.renderContent()}
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
