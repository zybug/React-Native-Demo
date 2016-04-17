import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

var onePT = 1 / React.PixelRatio.get();

class Search extends Component {
  getInitalState(){
    return {
      show: false,
    };
  };
  getValue(text) {
    var value = text;
    this.setState({
      show: ture,
      value: value,
    });
  };
  hide(val) {
    this.setState({
      show: false,
      value: val,
    });
  };

  render() {
    return (
      <View style = {[styles.flex]}>
        <View style = {[styles.flexDirection, styles.inputHeight]}>
          <View style = {styles.flex}>
            <TextInput
              style = {styles.input}
              returnKeyType="search"
              palceholder = "请输入关键字"
              onChangeText={this.getValue}
              value = {this.state.text}
              onEndEditing = {this.hide.bind(this, this.state.value)}
               />
          </View>
          <View style = {styles.btn}>
            <Text style = {styles.search} onPress={this.hide.bind(this, this.state.value)}> 搜索 </Text>
          </View>
        </View>
        {
          this.state.show?
          <View style={[styles.result]}>
            <Text onPress = {this.hide.bind(this, this.state.value + '庄')}
                style = {styles.item} numberOfLines={1}>{this.state.value}庄</Text>
            <Text onPress = {this.hide.bind(this, this.state.value + '园街')}
                style = {styles.item} numberOfLines={1}>{this.state.value}园街</Text>
            <Text onPress = {this.hide.bind(this, 80 + this.state.value + '综合商店')}
                style = {styles.item} numberOfLines={1}>{this.state.value}综合商店</Text>
            <Text onPress = {this.hide.bind(this, this.state.value + '桃')}
                style = {styles.item} numberOfLines={1}>{this.state.value}桃</Text>
            <Text onPress = {this.hide.bind(this, '杨林' + this.state.value + '园')}
                style = {styles.item} numberOfLines={1}>杨林{this.state.value}</Text>
          </View>
          : null
        }
      </View>
    );
  };
};

const styles = StyleSheet.create ({
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
  result: {
    marginTop: onePT,
    marginLeft: 5,
    marginRight: 5,
    height: 200,
    borderColor: '#ccc000',
    borderTopWidth: onePT,
  },
  item: {
    fontSize: 16,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: onePT,
    borderColor: '#ddd000',
    borderTopWidth: 0,
  },
});

module.exports = Search;
