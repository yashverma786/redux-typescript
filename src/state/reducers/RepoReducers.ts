import { ActionType } from "../action-types/index";
import { Action } from "../actions/index";
interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  data: [],
  error: null,
};
const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  action;

  if (action.type === "search_repositories_success") {
    //guards
    //100% certain that action is SearchRepositoriesSuccessAction
    action.payload;
  }
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};
export default reducer;
