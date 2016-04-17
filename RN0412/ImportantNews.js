
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

class ImportantNews extends Component {
  show(title) {
    alert(title);
  };
  render() {
    var news = [];
    for (var i in this.props.news) {
      var text = (
        <Text
          onPress = {this.show.bind(this, this.props.news[i])}
          numberOfLines={2}
          style = {styles.news_item}>
          {this.props.news[i]}
          </Text>
      );
      news.push(text);
    }
    return(
      <View style = {styles.flex}>
        <Text style= {styles.news_title}>今日要闻</Text>
        {news}
      </View>
    );
  };
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
  news_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#cd1d1c',
    marginLeft: 10,
    marginTop: 15,
  },
  news_item: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    lineHeight: 20,
  }
});

module.exports = ImportantNews;
