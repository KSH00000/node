import Swal from "sweetalert2";
import {useState} from "react";
function Comp04(){
    let [count, setCount] = useState(10);
    // let countState = useState(10);
    // let count = countState[0];
    // let setCount = countState[1];

    const onIncrease = () => {
        setCount(count+1);
        console.log(count);
    }
    const onDecrease = () => {
        if(count > 0){
            setCount(count-1);
            console.log(count);
        }else {
            Swal.fire({    
                icon:"warning",
                title:"에러",
                text: "0밑으로는 감소불가"
            })
            console.log("안된다고 멍청아");
        }
    }
    return(
        <>
          <h2>{count}</h2>
          <h2>0 아래로는 감소시키지 마시오</h2>
          <div>
            <button onClick={onIncrease}>증가</button>
            <button onClick={onDecrease}>감소</button>
          </div>
        </>
    )
}
export default Comp04;