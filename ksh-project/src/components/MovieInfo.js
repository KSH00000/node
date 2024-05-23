import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

export default function MoiveInfo() {

  const navigation = useNavigate();
  //param
  const { movieCd } = useParams();

  //state
  const [form, setForm] = useState({ "movieCd": 0, "mRank": "", "movieNm": "", "openDt": "", "saleAcc": "", "audiAcc": "", "movieImg": "" })

  //callAPI
  async function callAPI() {
    const result = await axios.get(`http://192.168.0.9:8000/movie/${movieCd}`);
    setForm(result.data[0])
    console.log(result.data);
  }

  //useEffect
  useEffect(() => { callAPI() }, [])

  return (<>
  <h3>영화 정보</h3>
    <table>
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
        <tr key={form.movieCd}>
          <td><img src={"http://192.168.0.9:8000/" + form.movieImg}></img></td>
          <td>{form.mRank}</td>
          <td>{form.movieNm}</td>
          <td>{form.openDt}</td>
          <td>{form.salesAcc}</td>
          <td>{form.audiAcc}</td>
          <td>⭐⭐⭐⭐⭐</td>
        </tr>
      </tbody>
    </table>

  </>
  )
}