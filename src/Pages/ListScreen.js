import React from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Card from '../components/Card'

import { connect } from 'react-redux';

import { photosActions } from '../_actions';
import { fetchPhotos } from '../_helpers';

class ListScreen extends React.Component {
  state = {
    isLoading: true
  }
  componentDidMount() {
    fetchPhotos().then(photos => {
      this.setState({ isLoading: false })
      this.props.uploadPhotos(photos)
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    let { photos } = this.props;
    let { isLoading } = this.state;
    return (
      <ScrollView style={styles.container}>
        {isLoading ?
          <ActivityIndicator size="large" color="#ff0000" />
          :
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
  uploadPhotos: (photos) => dispatch(photosActions.uploadPhotos(photos))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
