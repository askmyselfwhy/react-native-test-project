import React from 'react';
import { StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native';
import Image from 'react-native-image-progress';

export default class PhotoScreen extends React.Component {
  render() {
    let imgURI = this.props.navigation.getParam('imgURI');
    let { height, width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: imgURI }}
          indicator={ActivityIndicator}
          indicatorProps={{
            size: 80,
            color: '#ff0000',
          }}
          style={{
            width: width,
            height: height
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
});
