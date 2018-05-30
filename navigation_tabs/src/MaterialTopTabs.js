import React, { Component } from 'react';

import { View, Text, StyleSheet, YellowBox } from 'react-native';

import { createMaterialTopTabNavigator } from 'react-navigation';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

class Album extends Component {
  static navigationOptions = {
    title: 'Album'
  };
  render() {
    console.log('Album:render');
    return (
      <View style={styles.container}>
        <Text>Album</Text>
      </View>
    );
  }

  componentWillMount() {
    console.log('Album:cwm');
  }

  componentDidMount() {
    console.log('Album:cdm');
  }
}

class Library extends Component {
  static navigationOptions = {
    title: 'Library'
  };
  render() {
    console.log('Library:render');
    return (
      <View style={styles.container}>
        <Text>Library</Text>
      </View>
    );
  }

  componentWillMount() {
    console.log('Library:cdm');
  }

  componentDidMount() {
    console.log('Library:cdm');
  }
}

class History extends Component {
  static navigationOptions = {
    title: 'History'
  };
  render() {
    console.log('History:render');
    return (
      <View style={styles.container}>
        <Text>History</Text>
      </View>
    );
  }

  componentWillMount() {
    console.log('History:cdm');
  }

  componentDidMount() {
    console.log('History:cdm');
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
    inactiveTintColor: '#000000',
    labelStyle: {
      fontSize: 12
    }
  }
};

// import styles from './styles';
export default createMaterialTopTabNavigator(
  {
    Album,
    History,
    Library
  },
  routConfiguration
);
