import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginBottom: 10
  },
});
