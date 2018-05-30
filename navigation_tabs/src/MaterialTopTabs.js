import React, { Component } from 'react';

import { View, Text, StyleSheet, YellowBox } from 'react-native';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

class Album extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Album</Text>
      </View>
    );
  }
}

class Library extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Library</Text>
      </View>
    );
  }
}

class History extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>History</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const routConfiguration = {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12
    },
    style: {
      backgroundColor: '#fff'
    }
  }
};

// import styles from './styles';
export default createMaterialBottomTabNavigator(
  {
    Album,
    History,
    Library
  },
  routConfiguration
);
