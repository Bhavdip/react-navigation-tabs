/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import BottomTab from './src/BottomTab';
import MaterialTopTabs from './src/MaterialTopTabs';

class Home extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.props.navigation.push('BottomTabs')}
        >
          <Text>Bottom tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.props.navigation.push('MaterialTopTabs')}
        >
          <Text>Material top tabs</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const App = createStackNavigator({
  Home: {
    screen: Home
  },
  BottomTabs: {
    screen: BottomTab
  },
  MaterialTopTabs: {
    screen: MaterialTopTabs
  }
});

const styles = StyleSheet.create({
  item: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee'
  }
});

export default App;
