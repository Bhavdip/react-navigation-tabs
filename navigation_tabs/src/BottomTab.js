import React, { Component } from 'react';

import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// import styles from './styles';

const tabBarIcon = name => ({ tintColor }) => (
  //<FontAwesome name={name} color={tintColor} size={24} />
  <FontAwesome name="trophy" />
);

class Album extends Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('photo-album')
  };

  render() {
    return (
      <View>
        <Text>Album</Text>
      </View>
    );
  }
}

class Library extends Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('photo-library')
  };

  render() {
    return (
      <View>
        <Text>Library</Text>
      </View>
    );
  }
}

class History extends Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('history')
  };

  render() {
    return (
      <View>
        <Text>History</Text>
      </View>
    );
  }
}

class Cart extends Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('shopping-cart')
  };

  render() {
    return (
      <View>
        <Text>Cart</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    Album,
    Library,
    History,
    Cart
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 16
      },
      style: {
        backgroundColor: 'yellow'
      }
    }
  }
);
