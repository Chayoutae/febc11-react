import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/todo">TodoList</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;