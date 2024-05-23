import { useEffect, useState, useRef } from "react";
//import Swal from "sweetalert2"
import axios from "axios";
export default function MovieInsert() {
  let txtUsername = useRef(null);
  let [movieData, setMovieData] = useState({movieImgFile:"", movieNm:"", mRank:"", openDt:"", salesAcc:"", audiAcc:""});
  let {mRank, movieNm, openDt, salesAcc, audiAcc, movieImgFile} = movieData;
  
  useEffect(() => {
    txtUsername.current.focus();
  }, [])
  
  const clickHandler = async (e) => {
   
   const formData = new FormData();
  
    formData.append("mRank", mRank);
    formData.append("movieNm", movieNm);
    formData.append("openDt", openDt);
    formData.append("salesAcc", salesAcc);
    formData.append("audiAcc", audiAcc);
    formData.append("movieImgFile", movieImgFile.files[0]);

   try{
     const response = await axios.post("http://192.168.0.9:8000/movie", formData, {
       headers: {
         "Content-Type": "multipart/form-data",
        },
      });
      txtUsername.current.focus()
    } catch(error){
      
    }
    alert('영화제목:' + movieNm + '개봉날짜:' + openDt)
  };
  
 

 
  return (<>
  <h3>영화등록 하기</h3>
  <form name="movieDt">
    <input type="file" name="movieImgFile"  
    onChange={e => setMovieData({...movieData, movieImgFile: e.target})}>
    </input>
    <input ref={txtUsername} type="text" name="movieNm" placeholder="영화제목" value={movieNm}
    onChange={e => setMovieData({...movieData, movieNm: e.target.value})}>
    </input>
    <input type="text" name="mRank" placeholder="순위" value={mRank}
    onChange={e => setMovieData({...movieData, mRank: e.target.value})}>
    </input>
    <input type="text" name="openDt" placeholder="개봉날짜 0000-00-00" value={openDt}
    onChange={e => setMovieData({...movieData, openDt: e.target.value})}>
    </input>
    <input type="text" name="salesAcc" placeholder="누적매출액수" value={salesAcc}
    onChange={e => setMovieData({...movieData, salesAcc: e.target.value})}>
    </input>
    <input type="text" name="audiAcc" placeholder="누적관람객수" value={audiAcc}
    onChange={e => setMovieData({...movieData, audiAcc: e.target.value})}>
    </input>
    <button onClick={clickHandler} type="button">등록</button>
  </form>
  </>);
};