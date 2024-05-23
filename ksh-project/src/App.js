import { Routes, Route, NavLink } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieInfo from "./components/MovieInfo";
import MovieInsert from "./components/MovieInsert";

function App() {
  return (
    <div>
      <ul>
        <li><NavLink to="/">목록으로</NavLink></li>
        <li><NavLink to="/movie/insert">영화등록</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<MovieList />}></Route>
        <Route path="/movie/:movieCd" element={<MovieInfo />}></Route>
        <Route path="/movie/insert" element={<MovieInsert />}></Route>
      </Routes>

    </div>
  );
}

export default App;
