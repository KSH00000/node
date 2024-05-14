import Comp from "./component/Comp09"
function App() {
  const products = [{no:1, pname:"apple", price:200},
                    {no:2, pname:"item2", price:300},
                    {no:3, pname:"item3", price:100},];
  return (
    <div className="App">
      {/* <Comp products={products}/> */}
      <Comp/>
    </div>
  );
}

export default App;
