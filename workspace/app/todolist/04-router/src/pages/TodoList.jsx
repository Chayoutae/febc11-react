import { Link } from "react-router-dom";

function TodoList() {
  const todos = [
    { id: 1, title: "잠자기", completed: false },
    { id: 2, title: "자바스크립트 복습", completed: false },
    { id: 3, title: "리액트 과제 하기", completed: true },
  ];

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/todo/add">추가</Link>

        <div>
          <input type="text" placeholder="검색" />
          <button type="submit">검색</button>
        </div>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.id}{" "}
              <Link to={`/todo/${todo.id}`}>
                {todo.completed ? <del>{todo.title}</del> : todo.title}
              </Link>{" "}
              <button>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;