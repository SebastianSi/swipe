import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ball from './src/Ball'
import Ball2 from './src/Ball2'
import Ball3 from './src/Ball3'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ball />
        <Ball2 />
        <Ball3 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start'
  },
});
