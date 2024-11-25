import { Link } from "react-router-dom";

function TodoAdd() {
  return (
    <div id="main">
      <h2>할일 추가</h2>
      <div className="todo">
        <div>
          제목 :<input type="text" />
        </div>
        <div>
          내용 :<textarea></textarea>
        </div>
        <Link to="/todolist">추가</Link>{" "}
        <Link to="/todolist">취소</Link>
      </div>
    </div>
  );
}

export default TodoAdd;