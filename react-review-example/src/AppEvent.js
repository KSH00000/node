import Swal from "sweetalert2"
function Button({ asdf, children }) {

  return (
    <button onClick={() =>{asdf('자식파이어!!')}}>
      {children}
    </button>
  );
}

function PlayButton({ movieName, c1 }) {
  function handlePlayClick(msg) {
    Swal.fire({text:`${msg}, Playing ${movieName}!`});
    c1();
  }

  return (
    <Button asdf={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

function UploadButton({c2}) {
  
  return (
    <Button asdf={c2}>
      Upload Image
    </Button>
  );
}

function Toolbar( {onClick1, onClick2}) {
  return (
    <div>
      <PlayButton c1={onClick1} movieName="Kiki's Delivery Service" />
      <UploadButton c2={onClick2}/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Toolbar onClick1={()=> Swal.fire({text:'click1'})} 
      onClick2={()=> Swal.fire({text:'click2'})}/>
    </div>
  );
}

export default App;
