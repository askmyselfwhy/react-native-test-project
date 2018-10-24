export default photosActions = {
  uploadPhotos = (photos) => {
    return {
      type: action_types.UPLOAD_PHOTOS,
      payload: photos
    }
  }
}