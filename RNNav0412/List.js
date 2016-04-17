import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS,
} from 'react-native';
var Detail = require('./Detail');


class List extends Component {
	render() {
		return(
			<ScrollView style = {styles.flex}>
				<Text style = {styles.list_item} onPress={this.goTo}>我是测试文字，只是查看效果</Text>
				<Text style = {styles.list_item} onPress={this.goTo}>我是测试文字，只是查看效果</Text>
				<Text style = {styles.list_item} onPress={this.goTo}>我是测试文字，只是查看效果</Text>
			</ScrollView>
		);
	};
	goTo() {
		this.props.navigator.push({
			component: Detail,
			title: '邮轮详情',
			rightButtonTitle: '购物车',
			onRightButtonPress() {
				alert('进入我的购物车');
			}
		});
	};
}


const styles = StyleSheet.create ({
	flex: {
		flex: 1,
	},
	list_item: {
		height: 40,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		justifyContent: 'center',
	}
});

module.exports = List;
