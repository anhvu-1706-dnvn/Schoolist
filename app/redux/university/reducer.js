import {universityActionTypes} from './actions';
export const initialState = {
  universities: [],
  // query: {
  //   //offset: 0, // offset = (page - 1) * limit;
  //   limit: 10,
  //   page: 1,
  // },
  total: 0,
  searchText: {},
  //pageCount: null,
  loading: false,
  listUniversitySuccess: undefined,
  listUniversityFailure: undefined,

  createUniversitySuccess: undefined,
  createUniversityFailure: undefined,

  updateUniversitySuccess: undefined,
  updateUniversityFailure: undefined,

  setSearchTextSuccess: undefined,
  setSearchTextFailure: undefined,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case universityActionTypes.GET_LIST_UNIVERSITY_ATTEMPT:
      return {
        ...state,
        loading: true,
      };
    case universityActionTypes.GET_LIST_UNIVERSITY_SUCCESS:
      return {
        ...state,
        universities:
          action.page === 1
            ? action.data
            : [...state.universities, ...action.data],
        total: action.total,
        // limit: action.limit,
        // page: action.page,
        //offset: action.offset,
        loading: false,
        listUniversitySuccess: true,
        listUniversityFailure: false,
      };
    case universityActionTypes.GET_LIST_UNIVERSITY_FAILURE:
      return {
        ...state,
        loading: false,
        listUniversitySuccess: false,
        listUniversityFailure: action.getError,
      };
    case universityActionTypes.CREATE_ONE_UNIVERSITY_ATTEMPT:
      return {
        ...state,
        loading: true,
      };
    case universityActionTypes.CREATE_ONE_UNIVERSITY_SUCCESS:
      return {
        ...state,
        loading: false,
        createUniversitySuccess: true,
        createUniversityFailure: false,
      };
    case universityActionTypes.CREATE_ONE_UNIVERSITY_FAILURE:
      return {
        ...state,
        loading: false,
        createUniversitySuccess: false,
        createUniversityFailure: action.createError,
      };
    case universityActionTypes.UPDATE_ONE_UNIVERSITY_ATTEMPT:
      return {
        ...state,
        loading: true,
      };
    case universityActionTypes.UPDATE_ONE_UNIVERSITY_SUCCESS:
      return {
        ...state,
        loading: false,
        updateUniversitySuccess: true,
        updateUniversityFailure: false,
      };
    case universityActionTypes.UPDATE_ONE_UNIVERSITY_FAILURE:
      return {
        ...state,
        loading: false,
        updateUniversitySuccess: false,
        updateUniversityFailure: action.updateError,
      };
    case universityActionTypes.SET_SEARCH_TEXT_SUCCESS:
      return {
        ...state,
        loading: false,
        searchText: {
          name: {$contL: action.text},
        },
        setSearchTextSuccess: true,
        setSearchTextFailure: false,
      };
    case universityActionTypes.SEARCH_HISTORY_UNIVERSITY_FAILURE:
      return {
        ...state,
        loading: false,
        setSearchTextSuccess: false,
        setSearchTextFailure: action.error,
      };
    default:
      return state;
  }
}
