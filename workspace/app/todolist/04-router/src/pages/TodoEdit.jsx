import { Link, useParams } from "react-router-dom";

function TodoEdit() {
  const { id } = useParams();

  return (
    <div id="main">
      <h2>할일 수정</h2>
      <div className="todo">
        <div>
          제목 :<input type="text" />
        </div>
        <div>
          내용 :<textarea></textarea>
        </div>
        <div>
          완료 :<input type="checkbox" />
        </div>
        <Link to={`/todo/${id}`}>수정</Link>{" "}
        <Link to={`/todo/${id}`}>취소</Link>
      </div>
    </div>
  );
}

export default TodoEdit;