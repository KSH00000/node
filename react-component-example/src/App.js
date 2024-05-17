// import Comp from "./component/Comp09"
import TodoApp from "./page/TodoApp"
import Comp01 from "./component/Comp01";
import Comp02 from "./component/Comp02";
import Comp03 from "./component/Comp03";
import Comp04 from "./component/Comp04";
import Comp05 from "./component/Comp05";
import Comp06 from "./component/Comp06";
import Comp07 from "./component/Comp07";
import Comp08 from "./component/Comp08";
import Comp09 from "./component/Comp09";

function App() {
  // const products = [{no:1, pname:"apple", price:200},
  //                   {no:2, pname:"item2", price:300},
  //                   {no:3, pname:"item3", price:100},];
  const DATA = [
    { id: "todo-0", name: "Eat", completed: true},
    { id: "todo-1", name: "Sleep", completed: false},
    { id: "todo-2", name: "Repeat", completed: false},
  ];
  return (
    <div className="App">
      {/* <Comp products={products}/> */}
      <TodoApp tasks={DATA}/>
    </div>
  );
}

export default App;
