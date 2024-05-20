import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

export default function BoardInfo() {

  const navigation = useNavigate();
  //param
  const { movieCd } = useParams();

  //state
  const [form, setForm] = useState({ "movieCd": 0, "mRank": "", "movieNm": "", "openDt": "", "saleAcc": "", "audiAcc": "", "movieImg": "" })

  //callAPI
  async function callAPI() {
    const result = await axios.get(`http://localhost:8000/movie/${movieCd}`);
    setForm(result.data[0])
    console.log(result.data);
  }

  //useEffect
  useEffect(() => { callAPI() }, [])

  return (
    <table>
      <thead>
        <tr key={form.movieCd}>
          <td><img src={"http://localhost:8000/" + form.movieImg}></img></td>
          <td>{form.movieNm}</td>
          <td>{form.openDt}</td>
          <td>{form.salesAcc}</td>
          <td>{form.audiAcc}</td>
        </tr>
      </thead>
    </table>
  )
}