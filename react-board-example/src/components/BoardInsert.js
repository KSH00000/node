import { useEffect, useState, useRef } from "react";
//import Swal from "sweetalert2"
import axios from "axios";
export default function MovieInsert() {
  let txtUsername = useRef(null);
  let [formdata, setFormdata] = useState({ title: "", body: "", writer: "" });
  let { title, body, writer } = formdata;

  useEffect(() => {
    txtUsername.current.focus();
  }, [])

  const clickHandler = () => {
    alert('title:' + title + 'writer:' + writer)
    axios.post("http://192.168.0.9:8000/board", { title, body, writer })
    txtUsername.current.focus();
  }

  return (<>
    
    <form>
      <input ref={txtUsername} type="text" name="title" placeholder="title" value={title}
        onChange={e => setFormdata({ ...formdata, title: e.target.value })}>
      </input>
      <textarea type="text" name="body" placeholder="body" value={body}
        onChange={e => setFormdata({ ...formdata, body: e.target.value })}>
      </textarea>
      <input type="text" name="writer" placeholder="writer" value={writer}
        onChange={e => setFormdata({ ...formdata, writer: e.target.value })}>
      </input>
      <button onClick={clickHandler} type="submit">등록</button>
    </form>
  </>);
};