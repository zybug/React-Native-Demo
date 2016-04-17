
import React, {
  StyleSheet
} from 'react-native';


var baseUri = 'https://api.zybug.com';
var model = [
	{
		id: '1',
		title: '新西兰进口猕猴桃',
		desc: '12个装',
		prcie: 99,
		url: 'http://vczero.github.io/ctrip/guo_1.jpg'
	},
	{
		id: '2',
		title: '墨西哥进口牛油果',
		desc: '6个装',
		prcie: 59,
		url: 'http://vczero.github.io/ctrip/guo_2.jpg'
	}
];

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
    color: 'red',
    marginBottom: 5,
  },
});


module.exports = {
	blog: baseUri,
	model: model,
	constStyle: styles
}