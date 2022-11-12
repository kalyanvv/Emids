import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_PRODUCTLIST,
  FETCH_PRODUCTLIST_BY_ID,
} from "../constants/actionTypes";

const initialState = {
  data: [],
  loading: false,
};

export default function productreducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case END_LOADING:
      return { ...state, loading: false };
    case FETCH_ALL_PRODUCTLIST:
      return { ...state, data: action.payload };
    case FETCH_PRODUCTLIST_BY_ID:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
