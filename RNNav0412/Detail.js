import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

class Detail extends Component {
	render() {
		return(
			<ScrollView>
				<Text> 详情页 </Text>
				<Text> 尽管没有信息这也是详情页 </Text>
			</ScrollView>
		);
	}
}

module.exports = Detail;