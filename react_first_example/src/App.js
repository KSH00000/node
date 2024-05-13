import FilterableProductTable from "./product";
function Header(props) {
  console.log(props);
  return (
    <header>
      <h1><a href="/">{props.title}</a></h1>
    </header>
  )
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
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

function Gallery(props) {
  let img = props.img.map(p => 
    <div className="col-4 p-3" key={p.id}>
      <img className="rounded-5" position= "absolute;" top="0;" left="0;" height="100%" width="100%"
       src={p.src} alt={p.alt}></img>
    </div>
           );
  return (
    <div className="container">
      <div className="row">
        {img}
      </div>
    </div>)
}
function App() {
  const imges = [{ id: 1, src: "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg", alt: "Lady with a Teddy" },
  { id: 2, src: "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg", alt: "Girl with camera" },
  { id: 3, src: "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg", alt: "Beautiful Girl with Glasses" },
  { id: 4, src: "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg", alt: "Redhead with frackles" },
  { id: 5, src: "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg", alt: "Girl in black dress" },
  { id: 6, src: "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg", alt: "Girl Sitting on Chair" }];

  const topics = [{ id: 1, title: 'html', body: 'html is...' },
  { id: 2, title: 'css', body: 'css is...' },
  { id: 3, title: 'javascript', body: 'javascript is ...' }];


  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }];
  return (
    <div>
      <FilterableProductTable products={PRODUCTS}/>
      <Gallery img={imges} />
      <Header title="REACT" />
      <Header title="예담" />
      <Header title="바보" />
      <Nav topics={topics} />
      <Article title="환영!" body="안함!" />
      <Article title="yeah!" body="NICE!" />
    </div>
  );
}

export default App;
