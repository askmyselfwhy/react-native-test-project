import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';

import { photosActions } from '../_actions';
import { fetchPhotos } from './../_helpers';

class List extends React.Component {
  componentDidMount() {
    let photos = fetchPhotos();
    this.props.uploadPhotos(photos);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => ({
  photos: state.photos
})
const mapDispatchToProps = (dispatch) => ({
  uploadPhotos: (photos) => dispatch(photosActions.uploadPhotos(photos))
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
