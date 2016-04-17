
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

class NewsList extends Component {
  render() {
    return(
      <View style = {styles.list_item}>
       <Text style = {styles.list_item_font}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  list_item: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd000',
    justifyContent: 'center',
  },
  list_item_font: {
    fontSize: 16,
  },
});

module.exports = NewsList;
