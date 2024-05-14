import Swal from "sweetalert2";
import { useState } from "react";
function Header(props) {
  return (
    <header>
      <h1><a href="/" onClick={function (event) {
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(t.id));
      }}>{t.title}</a></li>)
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}
function Create() {
  return (<article>
    <h2>Create</h2>
    <form>
      <input type="text" name="title" placeholder="title" />
    </form>
  </article>
  )
}
function App() {
  const [mode, setMode] = useState("welcome");
  const [id, setId] = useState(1);
  const topics = [{ id: 1, title: 'html', body: 'html is...' },
  { id: 2, title: 'css', body: 'css is...' },
  { id: 3, title: 'javascript', body: 'javascript is ...' }];

  let content = null;
  if (mode === "welcome") {
    content = <Article title="welcome" body="GOOD!" />
  } else if (mode === "read") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />
  } else if (mode === "create") {
    content = <Create />
  }

  return (
    <div>
      <Header title="REACT" onChangeMode={() => {
        setMode("welcome");
        Swal.fire({
          icon: 'warning',
          text: '느낌표 !'
        });
      }} />
      <Nav topics={topics} onChangeMode={(id) => {
        setMode("read");
        setId(id);
        Swal.fire({
          icon: 'warning',
          text: 'id는' + id + '입니다.'
        });
      }} />
      {content}
      <a herf="/create" onClick={event => {
        event.preventDefault();
        setMode("create");
      }}>Create</a>
    </div>
  );
}

export default App;
