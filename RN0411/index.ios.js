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
  PixelRatio
} from 'react-native';
// import Button, {
//   Button,
// } from 'react-native-button';
// var Button = require('react-native-button');

class RN0411 extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style = {[styles.item, styles.center]}>
          <Text style = {styles.font}>酒店</Text>
        </View>
        <View style = {[styles.item, styles.lineLeftRight]}>
          <View styte = {[styles.center, styles.flex, styles.lineCenter]}>
            <Text styte = {styles.font}>海外酒店</Text>
          </View>
          <View styte = {[styles.center, styles.flex]}>
            <Text styte = {styles.font}>特惠酒店</Text>
          </View>
        </View>
        <View style = {styles.item}>
          <View styte = {[styles.center, styles.flex, styles.lineCenter]}>
            <Text styte = {styles.font}>团购</Text>
          </View>
          <View styte = {[styles.center, styles.flex]}>
            <Text styte = {styles.font}>客栈 公寓</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    height: 84,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 2,
    backgroundColor: '#FF0067',
  },
  item: {
    flex: 1,
    height: 80,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flex: 1
  },
  font: {
    color: '#fff000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lineLeftRight: {
    borderLeftWidth: 1/PixelRatio.get(),
    borderRightWidth: 1/PixelRatio.get(),
    borderColor: '#fff000'
  },
  lineCenter: {
    borderBottomWidth: 1/PixelRatio.get(),
    borderColor: '#fff000',
  }
});

//
// class RN0411 extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//         <Button style={{fontSize: 20, color: 'green'}}
//             styleDisabled={{color: 'red'}}
//             onPress={this._handlePress}
//         >
//         Press Me!
//         </Button>
//       </View>
//     );
//   }
//   _handlePress(event) {
//
//   };
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('RN0411', () => RN0411);
