interface Todo {
  id: number;
  title: string;
  description: string;
}

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
}

const TodoList = ({ todos, onDelete }: Props) => {
  if (todos.length === 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>
              <button className="btn btn-primary" disabled>
                Edit
              </button>
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
