import photoConstants from './../_constants/photos.constants';

function photos(state = [], action) {
  switch (action.type) {
    case photoConstants.UPLOAD_PHOTOS:
      return action.payload;
    default:
      return state;
  }
}

export default photos;