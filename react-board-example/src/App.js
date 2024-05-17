import {NavLink, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import BoardList from "./components/BoardList";
import BoardInsert from "./components/BoardInsert";
import BoardUpdate from "./components/BoardUpdate";
import BoardInfo from "./components/BoardInfo";

function App() {
  return (
    <div>
          <ul >
            <li ><NavLink to="/">Home</NavLink></li>
            <li ><NavLink to="/board">게시판</NavLink></li>
            <li ><NavLink to="/board/insert">게시글등록</NavLink></li>
          </ul>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/board" element={<BoardList />}></Route>
            <Route path="/board/:boardId" element={<BoardInfo />}></Route>
            <Route path="/board/insert" element={<BoardInsert />}></Route>
            <Route path="/board/update" element={<BoardUpdate />}></Route>
          </Routes>

    </div>
  );
}

export default App;
