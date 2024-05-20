import {Routes, Route} from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieInfo from "./components/MovieInfo";
import MovieInsert from "./components/MovieInsert";
function App() {
  return (   
      <Routes>
        <Route path="/" element={<MovieList />}></Route>
        <Route path="/movie/:movieCd" element={<MovieInfo/>}></Route>
        <Route path="/movie/insert" element={<MovieInsert/>}></Route>
      </Routes>
  );
}

export default App;
