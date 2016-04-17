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
var Header = require('./header');
var ListView = require('./NewsList');
var ImportantNews = require('./ImportantNews');


class RN0412 extends Component {
  render() {
    return (
      <View style = {styles.flex}>
        <Header></Header>
        <ListView title='我是测试文字，只是想测试一下效果'></ListView>
        <ListView title='我是测试文字，只是想测试一下效果'></ListView>
        <ListView title='我是测试文字，只是想测试一下效果'></ListView>
        <ListView title='我是测试文字，只是想测试一下效果'></ListView>
        <ListView title='我是测试文字，只是想测试一下效果'></ListView>
        <ListView title='我是测试文字，只是想测试一下效果'></ListView>
        <ImportantNews news = {[
            '我是测试文字，只是想测试一下效果',
            '我是测试文字，只是想测试一下效果',
            '我是测试文字，只是想测试一下效果'
        ]}></ImportantNews>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});

AppRegistry.registerComponent('RN0412', () => RN0412);
