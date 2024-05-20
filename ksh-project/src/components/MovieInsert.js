import { useEffect, useState, useRef } from "react";
//import Swal from "sweetalert2"
import axios from "axios";
export default function MovieInsert() {
  let txtUsername = useRef(null);
  let [formdata, setFormdata] = useState({movieImg:"", movieNm:"", mRank:"", openDt:"", salesAcc:"", audiAcc:""});
  let {mRank, movieNm, openDt, salesAcc, audiAcc, movieImg} = formdata;
  
  useEffect(() => {
    txtUsername.current.focus();
  }, [])

  const clickHandler = () => {
    alert('영화제목:' + movieNm + '개봉날짜:' + openDt)
    axios.post("http://localhost:8000/", {movieImg, movieNm, mRank, openDt, salesAcc, audiAcc})
    txtUsername.current.focus();
  }
 
  return (<><form>
    <input type="file" name="movieImg"
    onChange={e => setFormdata({...formdata, movieImg: e.target.value})}></input>
    <input ref={txtUsername} type="text" name="movieNm" placeholder="movieNm" value={movieNm}
    onChange={e => setFormdata({...formdata, movieNm: e.target.value})}>
    </input>
    <input type="text" name="mRank" placeholder="mRank" value={mRank}
    onChange={e => setFormdata({...formdata, mRank: e.target.value})}>
    </input>
    <input type="text" name="openDt" placeholder="openDt" value={openDt}
    onChange={e => setFormdata({...formdata, openDt: e.target.value})}>
    </input>
    <input type="text" name="salesAcc" placeholder="salesAcc" value={salesAcc}
    onChange={e => setFormdata({...formdata, salesAcc: e.target.value})}>
    </input>
    <input type="text" name="audiAcc" placeholder="audiAcc" value={audiAcc}
    onChange={e => setFormdata({...formdata, audiAcc: e.target.value})}>
    </input>
    <button onClick={clickHandler} type="submit">등록</button>
  </form>
  </>);
};