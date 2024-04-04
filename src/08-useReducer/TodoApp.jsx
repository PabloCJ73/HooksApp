import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar informacion 1",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar informacion 2",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    console.log({ todo });
  };

  return (
    <>
      <h1>
        TdodApp: 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <TodoList todo={todos} />
          {/* TodoList */}
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          {/* TodoAdd */}
          <form>
            <input type="text" placeholder="Tarea" className="form-control" />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
          {/* Fin TodoAdd */}
        </div>
      </div>
    </>
  );
};
