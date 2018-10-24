import { photosConstants } from './../_constants/';
export default photosActions = {
  uploadPhotos: (photos) => {
    return {
      type: photosConstants.UPLOAD_PHOTOS,
      payload: photos
    }
  }
}