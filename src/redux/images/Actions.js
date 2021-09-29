import axios from 'axios'
import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  CREATE_IMAGE,
  UPDATE_IMAGE,
  DELETE_IMAGE
} from './Types'

export const fetchImages = () => {
  return (dispatch) => {
    dispatch(fetchImagesRequest())
    setTimeout(()=> {
      axios
        .get('https://api.unsplash.com/photos?client_id=EIuffVY_6NzhZgrC34gqGtXgWdqi1IMaqQsIJ3CH_-Y')
        .then(response => {
          console.log(`response`, response)
          const users = response.data
          dispatch(fetchImagesSuccess(users))
        })
        .catch(error => {
          dispatch(fetchImagesFailure(error.message))
        })
    }, 10000)
  }
}

export const fetchImagesRequest = () => {
  return {
    type: FETCH_IMAGES_REQUEST
  }
}

export const fetchImagesSuccess = images => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    payload: images
  }
}

export const fetchImagesFailure = error => {
  return {
    type: FETCH_IMAGES_FAILURE,
    payload: error
  }
}

export const createImage = image => ({
  type: CREATE_IMAGE,
  payload: image,
});

export const updateImage = (image) => ({
  type: UPDATE_IMAGE,
  payload: image,
});

export const deleteImage = (id) => ({
  type: DELETE_IMAGE,
  payload: id,
});