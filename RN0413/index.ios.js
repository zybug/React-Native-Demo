/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
var Search = require('./Search');

class RN0413 extends Component {
  render() {
    return (
      <View style = {[styles.flex, styles.topStatus]}>
        <Search></Search>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  topStatus: {
    marginTop: 25,
  },
  input: {
    height: 45,
    borderWidth: 1,
    marginLeft: 5,
    paddingLeft: 5,
    borderColor: '#ccc000',
    borderRadius: 4,
  },
  btn: {
    width: 55,
    marginLeft: -5,
    marginRight: 5,
    backgroundColor: '#23beff',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    color: '#fff000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('RN0413', () => RN0413);
