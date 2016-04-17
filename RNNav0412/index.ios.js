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
  NavigatorIOS,
} from 'react-native';
var List = require('./List');

class RNNav0412 extends Component {
  render() {
    return (
     <NavigatorIOS
     	style = {{flex: 1}}
     	initialRoute={{
     		component: List,
     		title:'邮轮',
     		passProps:{},
     	}}
     	/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNNav0412', () => RNNav0412);
