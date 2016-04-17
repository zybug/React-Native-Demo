/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Model = require('./model');
var conStyle = Model.constStyle;


class RN0416 extends Component {
  render() {
    return (
      <View style={conStyle.container}>
        <Text style={conStyle.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={conStyle.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={conStyle.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('RN0416', () => RN0416);
