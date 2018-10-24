import React from 'react';
import { StyleSheet, Image, Text, View, TouchableNativeFeedback, Dimensions } from 'react-native';

export default class Card extends React.Component {
  render() {
    let { author, title, imgURISmall, imgURILarge, navigate } = this.props;
    return (
      <View style={styles.card}>
        <TouchableNativeFeedback
          onPress={() => {
            navigate('Photo', { imgURI: imgURILarge })
          }}>
          <Image
            style={styles.image}
            source={{ uri: imgURISmall }} />
        </TouchableNativeFeedback>
        <View style={styles.textContainer}>
          <Text>Author: {author}</Text>
          <Text>Image title: {title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150
  },
  textContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    padding: 5,
    maxWidth: Dimensions.get('window').width - 150,
  },
});