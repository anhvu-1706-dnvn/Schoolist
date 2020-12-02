// import qs from 'qs';
export const criteriaActionTypes = {
  GET_LIST_CRITERIA_ATTEMPT: 'GET_LIST_CRITERIA_ATTEMPT',
  GET_LIST_CRITERIA_SUCCESS: 'GET_LIST_CRITERIA_SUCCESS',
  GET_LIST_CRITERIA_FAILURE: 'GET_LIST_CRITERIA_FAILURE',
};

// GET LIST UNIVERSITY
export function getListCriteriaAttempt() {
  return {
    type: criteriaActionTypes.GET_LIST_CRITERIA_ATTEMPT,
  };
}
export function getListCriteriaSuccess(data, total) {
  return {
    type: criteriaActionTypes.GET_LIST_CRITERIA_SUCCESS,
    data,
    total,
    // limit,
    // page,
    // pageCount,
  };
}
export function getListCriteriaFailure(getError) {
  return {
    type: criteriaActionTypes.GET_LIST_CRITERIA_FAILURE,
    getError,
  };
}
// THUNK :
export function getListCriteria() {
  console.log('URL', process.env.API_URL);
  return (dispatch) => {
    return fetch(`${process.env.API_URL}/criteria`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('DATA ', json.data);
        dispatch(getListCriteriaSuccess(json.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getListCriteriaFailure(error));
      });
  };
}
