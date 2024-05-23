import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "http://192.168.0.9:8000/";

  const callAPI = async () => {
    setLoading(true);
    const result = await axios.get(`${url}movie/`);
    setLoading(false);
    setMovies(result.data);
  }
  useEffect(() => { callAPI(); }, []);

  if (loading) return <h1>로딩중입니다......</h1>

  return (
    <>
      <h3>영화 목록</h3>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">별점</label>
        <select defaultValue="" className="form-select" id="inputGroupSelect01">
          <option value="">-- 선택하기 --</option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td></td>
            <td>순위</td>
            <td>영화제목</td>
            <td>개봉날짜</td>
            <td>누적매출액</td>
            <td>누적관람객수</td>
            <td>별점</td>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie =>
            <tr key={movie.movieCd}>
              <Link to={`/movie/${movie.movieCd}`}>
                <td className="w3-list-img">
                  <img src={url + movie.movieImg} ></img>
                </td>
              </Link>
                <td className="w3-list-info">{movie.mRank}</td>
                <td className="w3-list-info">{movie.movieNm}</td>
                <td className="w3-list-info">{movie.openDt}</td>
                <td className="w3-list-info">{movie.salesAcc}</td>
                <td className="w3-list-info">{movie.audiAcc}</td>
                <td>⭐⭐⭐⭐⭐</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}