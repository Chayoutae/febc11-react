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
        {/* <Link to="/todo/add">추가</Link> */}
        <a href="./add">추가</a>

        <div>
          <input type="text" placeholder="검색" />
          <button type="submit">검색</button>
        </div>

        <ul className="todolist">
          <li>
            <span>1</span>
            <a href="./list/1">잠자기</a>
            <a href="./list">삭제</a>
          </li>
          <li>
            <span>2</span>
            <a href="./tododetail.html">자바스크립트 복습</a>
            <a href="./todolist.html">삭제</a>
          </li>
          <li>
            <span>3</span>
            <a href="./list/1"><s>리액트 과제 하기</s></a>
            <a href="./list">삭제</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TodoList;