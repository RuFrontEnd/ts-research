import axios from "axios";
import { ActionTypes } from "./actionTypes";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface TODO {
  id: number;
  title: string;
  completed: boolean;
}

// interface FetchTodosActions {
//   type: ActionTypes.fetchTodos;
//   payload: Todo[];
// }

export const fetchTodos = async () => {
//   return async (dispatch: Dispatch) => {
//     const response = await axios.get<TODO[]>(url);
//     return {
//       type: ActionTypes.fetchTodos,
//       payload: response.data,
//     };
//   };
};
