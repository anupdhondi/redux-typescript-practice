import { ActionType } from '../action-types';
import { Action } from '../actions/index';

interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoryState = initialState,
  action: Action
): RepositoryState => {
  //action -> at this point action can be of 3 types. If you hover on action it will be of 3 types.

  //We are narrowing down the type so at each case action will be specific type. You could hover and check
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      //100% certain that "action" is SearchRepositoryAction. Hover and check
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      //100% certain that "action" is SearchRepositorySuccessAction. Hover and check
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      //100% certain that "action" is SearchRepositoryErrorAction. Hover and check
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
