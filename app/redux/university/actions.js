import qs from 'qs';
import Config from 'react-native-config';
export const universityActionTypes = {
  GET_LIST_UNIVERSITY_ATTEMPT: 'GET_LIST_UNIVERSITY_ATTEMPT',
  GET_LIST_UNIVERSITY_SUCCESS: 'GET_LIST_UNIVERSITY_SUCCESS',
  GET_LIST_UNIVERSITY_FAILURE: 'GET_LIST_UNIVERSITY_FAILURE',

  CREATE_ONE_UNIVERSITY_ATTEMPT: 'CREATE_ONE_UNIVERSITY_ATTEMPT',
  CREATE_ONE_UNIVERSITY_SUCCESS: 'CREATE_ONE_UNIVERSITY_SUCCESS',
  CREATE_ONE_UNIVERSITY_FAILURE: 'CREATE_ONE_UNIVERSITY_FAILURE',

  UPDATE_ONE_UNIVERSITY_ATTEMPT: 'UPDATE_ONE_UNIVERSITY_ATTEMPT',
  UPDATE_ONE_UNIVERSITY_SUCCESS: 'UPDATE_ONE_UNIVERSITY_SUCCESS',
  UPDATE_ONE_UNIVERSITY_FAILURE: 'UPDATE_ONE_UNIVERSITY_FAILURE',

  SET_SEARCH_TEXT_SUCCESS: 'SET_SEARCH_TEXT_SUCCESS',
  SET_SEARCH_TEXT_FAILURE: 'SET_SEARCH_TEXT_FAILURE',
};

// GET LIST UNIVERSITY
export function getListUniversityAttempt() {
  return {
    type: universityActionTypes.GET_LIST_UNIVERSITY_ATTEMPT,
  };
}
export function getListUniversitySuccess(data, page, total) {
  return {
    type: universityActionTypes.GET_LIST_UNIVERSITY_SUCCESS,
    data,
    page,
    total,
    // limit,
    // page,
    // pageCount,
  };
}
export function getListUniversityFailure(getError) {
  return {
    type: universityActionTypes.GET_LIST_UNIVERSITY_FAILURE,
    getError,
  };
}
// CREATE UNIVERSITY
export function createUniversityAttempt() {
  return {
    type: universityActionTypes.CREATE_ONE_UNIVERSITY_ATTEMPT,
  };
}
export function createUniversitySuccess() {
  return {
    type: universityActionTypes.CREATE_ONE_UNIVERSITY_SUCCESS,
  };
}
export function createUniversityFailure(createError) {
  return {
    type: universityActionTypes.CREATE_ONE_UNIVERSITY_FAILURE,
    createError,
  };
}
// UPDATE UNIVERSITY
export function updateUniversityAttempt() {
  return {
    type: universityActionTypes.UPDATE_ONE_UNIVERSITY_ATTEMPT,
  };
}
export function updateUniversitySuccess() {
  return {
    type: universityActionTypes.UPDATE_ONE_UNIVERSITY_SUCCESS,
  };
}
export function updateUniversityFailure(updateError) {
  return {
    type: universityActionTypes.UPDATE_ONE_UNIVERSITY_FAILURE,
    updateError,
  };
}

// Set search text

export function setSearchTextSuccess(text) {
  return {
    type: universityActionTypes.SET_SEARCH_TEXT_SUCCESS,
    text,
  };
}
export function setSearchTextFailure(error) {
  return {
    type: universityActionTypes.SET_SEARCH_TEXT_FAILURE,
    error,
  };
}
// THUNK :
export function getListUniversity(query) {
  if (query.limit === undefined) {
    query.limit = 10;
  }
  if (query.page === undefined) {
    query.page = 1;
  }

  query.s = JSON.stringify(query.s);
  const queryString = qs.stringify(query);

  return (dispatch) => {
    return fetch(`${Config.API_URL}/universities?${queryString}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch(getListUniversitySuccess(json.data, query.page, json.total));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getListUniversityFailure(error));
      });
  };
}
export function setSearchText(text) {
  return (dispatch) => {
    try {
      dispatch(setSearchTextSuccess(text));
    } catch (error) {
      dispatch(setSearchTextFailure(error));
    }
  };
}
