import Student from "./Student";
const Comp = () => {
    const std = [{no:1, name:"홍길동"},
                 {no:2, name:"박대기"}];
    const lis = std.map(l => 
      <Student key={l.no} no={l.no} std={l.name}/>
    )
    return(
        <div>
            {lis}
        </div>
    )
}

export default Comp;