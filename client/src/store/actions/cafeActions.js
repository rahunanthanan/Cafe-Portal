// cafeActions.js

import axios from 'axios';

// Define action types
export const GET_CAFES = 'GET_CAFES';
export const GET_CAFES_SUCCESS = 'GET_CAFES_SUCCESS';
export const GET_CAFES_FAILURE = 'GET_CAFES_FAILURE';
export const ADD_CAFE = 'ADD_CAFE';
export const ADD_CAFE_SUCCESS = 'ADD_CAFE_SUCCESS';
export const ADD_CAFE_FAILURE = 'ADD_CAFE_FAILURE';
export const UPDATE_CAFE = 'UPDATE_CAFE';
export const UPDATE_CAFE_SUCCESS = 'UPDATE_CAFE_SUCCESS';
export const UPDATE_CAFE_FAILURE = 'UPDATE_CAFE_FAILURE';
export const DELETE_CAFE = 'DELETE_CAFE';
export const DELETE_CAFE_SUCCESS = 'DELETE_CAFE_SUCCESS';
export const DELETE_CAFE_FAILURE = 'DELETE_CAFE_FAILURE';

// Define actions
export const getCafes = () => ({
  type: GET_CAFES,
});

export const getCafesSuccess = (cafes) => ({
  type: GET_CAFES_SUCCESS,
  payload: cafes,
});

export const getCafesFailure = () => ({
  type: GET_CAFES_FAILURE,
});

export const addCafe = (cafe) => ({
  type: ADD_CAFE,
  payload: cafe,
});

export const addCafeSuccess = (cafe) => ({
  type: ADD_CAFE_SUCCESS,
  payload: cafe,
});

export const addCafeFailure = () => ({
  type: ADD_CAFE_FAILURE,
});

export const editCafe = (id, cafe) => ({
  type: UPDATE_CAFE,
  payload: { id, cafe },
});

export const editCafeSuccess = (cafe) => ({
  type: UPDATE_CAFE_SUCCESS,
  payload: cafe,
});

export const editCafeFailure = () => ({
  type: UPDATE_CAFE_FAILURE,
});

export const deleteCafe = (id) => ({
  type: DELETE_CAFE,
  payload: id,
});

export const deleteCafeSuccess = (id) => ({
  type: DELETE_CAFE_SUCCESS,
  payload: id,
});

export const deleteCafeFailure = () => ({
  type: DELETE_CAFE_FAILURE,
});

// Define async action creators
export const fetchCafes = () => {
  return async (dispatch) => {
    dispatch(getCafes());

    try {
      const response = await axios.get('/cafes');
      const cafes = response.data;
      dispatch(getCafesSuccess(cafes));
    } catch (error) {
      dispatch(getCafesFailure());
    }
  };
};

export const createCafe = (cafe) => {
  return async (dispatch) => {
    dispatch(addCafe(cafe));

    try {
      const response = await axios.post('/cafes', cafe);
      const createdCafe = response.data;
      dispatch(addCafeSuccess(createdCafe));
    } catch (error) {
      dispatch(addCafeFailure());
    }
  };
};

export const editExistingCafe = (id, cafe) => {
  return async (dispatch) => {
    dispatch(editCafe(id, cafe));

    try {
      const response = await axios.put(`/cafes/${id}`, cafe);
      const updatedCafe = response.data;
      dispatch(editCafeSuccess(updatedCafe));
    } catch (error) {
      dispatch(editCafeFailure());
    }
  };
};

export const removeCafe = (id) => async (dispatch) => {
    dispatch(deleteCafe(id));
  
    try {
      await axios.delete(`/cafes/${id}`);
    } catch (err) {
      console.error(err);
    }
  };
