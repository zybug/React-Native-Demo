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
  Image,
  ScrollView,
  TabBarIOS,
} from 'react-native';

class RN0414 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tab: 'message'
		};
	};

	select(tabName) {
		this.state({
			tab: tabName,
		});
		// console.log(tabName);
		// this.setState({
		// 	tab: tabName
		// })
		// this.state.tab = tabName;
		// this.setState({
		// 	tab: tabName
		// });
	};

	render() {
	  return (
	  	<TabBarIOS style = {styles.flex}>
	  		<TabBarIOS.Item 
	  			title= "消息"
	  			// icon= {require("image!more")}
	  			selected = {this.state.tab === 'message' }
	  			onPress= {this.select.bind(this, 'message')}
	  			// selected= {this.state.tab === 'message'}>
	  			
	  			// selected={this.state.selectedTab === 'blueTab'}
		    //     onPress={() => {
		    //           this.setState({
		    //             selectedTab: 'blueTab',
		    //           });
		    //       }}>
	  			>
	  			<ScrollView>
	  				<View style = {styles.message}>
	  					<Text style = {styles.message_title}>南山南</Text>
	  					<Text>

						你在南方的艳阳里 大雪纷飞

						我在北方的寒夜里 四季如春

						如果天黑之前来的及

						我要忘了你的眼睛

						穷极一生 做不完一场梦

						他不在和谁谈论相逢的孤岛

						因为心里早已荒无人烟

						他的心里在装不下一个家

						做一个只对自己说谎的哑巴

						他说你任何为人称道的美丽

						不及他第一次遇见你

						时光苟延残喘 无可奈何

						如果所有土地连在一起

						走上一生只为拥抱你

						喝醉了他的梦 晚安

						你在南方的艳阳里 大雪纷飞

						我在北方的寒夜里 四季如春

						如果天黑之前来的及

						我要忘了你的眼睛

						穷极一生 做不完一场梦

						大梦初醒荒唐了一生

						南山南 北秋悲

						南山有谷堆

						南风喃 北海北

						北海有墓碑

						南山南 北秋悲

						南山有谷堆

						南风喃 北海北

						北海有墓碑

						北海有墓碑

	  					</Text>
	  				</View>
	  			</ScrollView>
	  		</TabBarIOS.Item>
	  		<TabBarIOS.Item
	  			title="联系人"
	  			systemIcon= 'recents'
	  			onPress={this.select.bind(this, 'phonelist')}
	  			selected= {this.state.tab === 'phonelist'}>
	  			// >
	  			<ScrollView>
	  				<Text style={styles.list}>
	  					<Text>唐三藏</Text>
	  					<Text>131-1234-1212</Text>
	  				</Text>
	  				<Text style={styles.list}>
	  					<Text>唐三藏</Text>
	  					<Text>131-1234-1212</Text>
	  				</Text>
	  				<Text style={styles.list}>
	  					<Text>唐三藏</Text>
	  					<Text>131-1234-1212</Text>
	  				</Text>
	  				<Text style={styles.list}>
	  					<Text>唐三藏</Text>
	  					<Text>131-1234-1212</Text>
	  				</Text>
	  			</ScrollView>
	  		</TabBarIOS.Item>
	  		<TabBarIOS.Item 
	  			title= "动态"
	  			onPress={this.select.bind(this, 'star')}
	  			selected= {this.state.tab === 'star'} >
	  			// >
	  			<ScrollView style = {styles.flex}>
	  				<Image style = {{width: 100, height: 100}}
	  					source= {{uri: 'http://vczero.github.io/ctrip/star_page.jpg'}} />
	  			</ScrollView>
	  		</TabBarIOS.Item>
	  	</TabBarIOS>
	  );
	};
}

const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	message: {
		alignItems: 'center',
		marginLeft: 5,
		marginRight: 5,
	},
	message_title: {
		fontSize: 18,
		color: '#18b5ff',
		marginBottom: 5,
	},
	list: {
		height: 30,
		fontSize: 15,
		marginLeft: 10,
		marginTop: 10,
	},
});

AppRegistry.registerComponent('RN0414', () => RN0414);
