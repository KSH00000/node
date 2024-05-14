import { useState } from "react";
import Swal from "sweetalert2";
function Comp(){
    let [color, setColor] = useState('black');
    const changeColor = (c) => {color = c;
        setColor(color);
    }
    let [message, setMessage] = useState('입장&퇴장');
    
    function sweet(){
        Swal.fire({
            icon: 'success',
            text: "성공"
        })
    }
    return(
        <>
           <button onClick={(e) => setMessage('입장!!!')}>입장</button>
           <button onClick={(e) => setMessage('퇴장...')}>퇴장</button>
           <h1 style={{backgroundColor:color,color:'white'}}>{message}</h1>     
           <button onClick={(e) => setColor('red')}>빨강</button>
           <button onClick={(e) => changeColor('blue')}>파랑</button>
           <button onClick={(e) => changeColor('green')}>초록</button>
           <button onClick={(e) => {
            changeColor('black');
            setMessage('입장&퇴장');
            sweet();
            }}>원래대로</button>
        </> 
    );
}

export default Comp;