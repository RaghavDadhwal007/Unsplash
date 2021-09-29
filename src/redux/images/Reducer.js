import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  ADD_IMAGE,
  UPDATE_IMAGE,
  DELETE_IMAGE,
} from "./Types";

const initialState = {
  loading: false,
  images: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  console.log(`action`, action)
  switch (action.type) {
    case FETCH_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_IMAGES_SUCCESS:
      return {
        loading: false,
        images: action.payload,
        error: "",
      };
    case FETCH_IMAGES_FAILURE:
      return {
        loading: false,
        images: [],
        error: action.payload,
      };
    case ADD_IMAGE:
      return {
        ...state,
        images: [action.payload, ...state.images],
      };
    case UPDATE_IMAGE:
      return {
        ...state,
        images: state.images.map((image) =>
          image.id === action.payload.id ? action.payload : image
        ),
      };
    case DELETE_IMAGE:
      return {
        ...state,
        images: state.images.filter((image) => image.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
