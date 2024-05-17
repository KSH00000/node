import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

export default function BoardList(){
  const [boards, setBoard] = useState([]);
  const [loading, setLoading] = useState(false);

  const callAPI = async () => {
    setLoading(true);
    const result = await axios.get(`http://localhost:8000/board/`);
    setLoading(false);
    setBoard(result.data);
  }
  useEffect( ()=>{  callAPI();  }, []);

  if(loading) return <h1>로딩중입니다......</h1>
  
  return (<>
    <h3>게시판</h3>
    <table className="table">
        <thead><tr><td>ID</td><td>Title</td><td>Date</td><td>Writer</td></tr></thead>
        <tbody>
        {boards.map(board=>
          <tr key={board.no}>
              <td>{board.no}</td>
              <td><Link to={`/board/${board.no}`}>{board.title}</Link></td>
              <td>{board.dt}</td>
              <td>{board.writer}</td>
          </tr>
          )}
        </tbody>
      </table>
  </>)
}