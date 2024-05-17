import { Routes, Route, NavLink, useParams, useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components"
import {Card, CardBody} from "reactstrap"

const SimpleButton = styled.button`
  color: white;
  background-color:black;
`;
const LargeButton = styled(SimpleButton)`
  font-size: 1.5rem;
  margin: 1rem; 
`;
 
function ReactButton(props){
  return <button className={props.className}>{props.children}</button>
}
const ReactLargeButton = styled(ReactButton)`
  background-color: gray;
  color: yellow;
`;
var contents = [ {id:1, title:'HTML', description:'HTML is...'},
                 {id:2, title:'JS', description:'JS is...'},
                 {id:3, title:'React', description:'React is...'}]
function Home() {
  const style = {fontSize:"3rem"}
  return (
    <div>
      <h2>home</h2>
      <div style={{Color:"green"}}>Home... sweetHome..</div>
      <SimpleButton>스타일드 컴포넌트</SimpleButton>
      <LargeButton>상속</LargeButton>
      <ReactButton>삭제</ReactButton>
      <ReactButton>등록</ReactButton>
      <ReactLargeButton>신비해지는버튼</ReactLargeButton>
    </div>
  );


}
function Topic(){
  var params = useParams();
  var topic_id = Number(params.topic_id);
  var con = contents.find((c) => topic_id === c.id)
  const navigation = useNavigate();
  let goHome = () => {navigation("/topics");};
  let goBack = () => {navigation(-1);};
  return(
    <div>
      <h3>{con.title}</h3>
      {con.description}
      <div className="mx-auto">
        <button onClick={(e) =>goBack()} className="btn btn-success me-3">뒤로가기</button>
        <button onClick={(e) =>goHome()} className="btn btn-info">홈으로</button>
      </div>
    </div>
  );
}
function Topics() {
  return (
    <div>
     <h2>Topics</h2>
     <ul className="nav nav-underline">
      {contents.map((content) => (
        <li className="nav-item" key={content.id}>
        <NavLink className="nav-link" to={"/topics/" + content.id}>{content.title}</NavLink>
      </li>
      ))}
     </ul>
     <Routes>
      <Route path="/:topic_id" element={<Topic />}></Route>
     </Routes>
    </div>
  );
}
function Contact() {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  return (
    <div>
      <h2>Contact</h2>
      Contact..
      <div>이름{search.get("name")}</div>
      <div>나이{search.get("age")}</div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <h1>Hello react router DOM</h1>
        </div>
      </nav>
      <div className="row">
        <div className="col-4">
          <ul className="nav nav-pills">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/topics">Topics</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="col-8">
          <Card className="m-3">
            <CardBody >
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/topics/*" element={<Topics />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
              </Routes>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;

