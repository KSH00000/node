import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import axios from "axios";

export default function BoardInfo(){

  const navigation = useNavigate();
  //param
  const{ boardNo }= useParams();

  //state
  const [form, setForm] = useState( {"no": 0,"title": "","body": "","dt": "","writer": ""  })

  //callAPI
  async function callAPI(){
    const result = await axios.get(`http://localhost:8000/board/${boardNo}`);
    setForm(result.data[0])
    console.log(result.status);
  }

  //useEffect
  useEffect(()=>{ callAPI() },[])
  
  return (<>
  <div className="card" style={{width: "25rem"}}>
    <div className="card-head"> {form.writer} {form.dt}</div>
    <div className="card-body">
      <h5 className="card-title">{form.title}</h5>
      <p className="card-text">{form.body}</p>
      <a href="#" className="btn btn-primary">삭제</a>
      <a href="#" className="btn btn-info">뒤로</a>
      <a href="#" className="btn btn-info">목록으로</a>
    </div>
  </div>
  </>)
}