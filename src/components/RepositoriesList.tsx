import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"; //use dispatch is a hook from react redux library
import { actionCreators } from "../state/index";

import { useActions } from "../hooks/useActions";
const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  //const dispatch = useDispatch();
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector(
    (state: any) => state.repositories
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //dispatch(actionCreators.searchRepositories(term));
    searchRepositories(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};
export default RepositoriesList;
