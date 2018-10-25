import React from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Card from '../components/Card'

import { connect } from 'react-redux';

import { fetchPhotos } from '../_helpers';

class ListScreen extends React.Component {
  componentDidMount() {
    this.props.uploadPhotos();
  }
  render() {
    const { navigate } = this.props.navigation;
    let { photos } = this.props;
    return (
      <ScrollView style={styles.container}>
        {photos && photos.length > 0 ?
          photos && photos.map(item =>
            <Card
              key={item.id}
              navigate={navigate}
              author={item.user.name}
              title={item.description || 'Cool picture'}
              imgURISmall={item.urls.small}
              imgURILarge={item.urls.regular}
            />
          )
          :
          <ActivityIndicator size="large" color="#ff0000" />
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    padding: 10
  },
});

const mapStateToProps = (state) => ({
  photos: state.photos
})
const mapDispatchToProps = (dispatch) => ({
  uploadPhotos: () => dispatch(fetchPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
