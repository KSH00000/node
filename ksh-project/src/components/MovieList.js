import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function BoardList() {
  const [movies, setBoard] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "http://localhost:8000/";

  const callAPI = async () => {
    setLoading(true);
    const result = await axios.get(`${url}movie/`);
    setLoading(false);
    setBoard(result.data);
  }
  useEffect(() => { callAPI(); }, []);

  if (loading) return <h1>로딩중입니다......</h1>


  // function searchFilter(data, type, search) {
  //   // data 값을 하나하나 꺼내와서
  //   return data.map((d) => {
  //     // 만약 해당 데이터가 search 값을 가지고 있다면 리턴한다.
  //     if (d[type].includes(search)) {
  //       return d;
  //     }
  //   });
  // }

  // // search 버튼 클릭 시 호출되는 함수
  // function search() {
  //   window.location.replace("/?movieCd=" + {movie.movieCd})
  // }


  return (
    <>
      <h3>게시판</h3>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">별점</label>
        <select defaultValue="" className="form-select" id="inputGroupSelect01">
          <option>-- 선택하기 --</option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
      </div>
      {/* <div>
        <input id="search-input"></input>
          <button id="search" onClick={search}>검색</button>
      </div> */}


      <table className="table">
        <thead>
          <tr>
            <td>포스터</td>
            <td>순위</td>
            <td>영화제목</td>
            <td>개봉날짜</td>
            <td>누적매출액</td>
            <td>누적관람객수</td>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie =>
            <tr key={movie.movieCd}>
              <td><Link to={`/movie/${movie.movieCd}`}><img src={url + movie.movieImg} ></img></Link></td>
              <td>{movie.mRank}</td>
              <td>{movie.movieNm}</td>
              <td>{movie.openDt}</td>
              <td>{movie.salesAcc}</td>
              <td>{movie.audiAcc}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}