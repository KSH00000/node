import { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2"
export default function Comp() {
    let txtUsername = useRef(null);
    let [formdata, setFormdata] = useState({ username: "", address: "" });
    let { username, address } = formdata;
    useEffect(() => {
        txtUsername.current.focus();
    }, [])
    const clickHandler = () => {
        //username + address 결과를 alert 
        Swal.fire({        
            html: '이름:' + username + '<br>주소:' + address,
            confirmButtonText: '확인'
        }).then(result => {
            if(result.isConfirmed){
                Swal.fire('승인완료','죠습니다','success')
            }
        });
        //input 초기화
        setFormdata({ username: "", address: "" });
        //username 입력태그에 focus
        txtUsername.current.focus();
    };

    const keyDownHander = (e) => {
        if( e.key === 'Enter'){
            clickHandler();
        }
    };

    return (<><tr>
        <input ref={txtUsername} type="text" name="username" placeholder="이름입력" value={username}
            onChange={e => setFormdata({ ...formdata, username: e.target.value })}></input>
                <button onClick={clickHandler}>확인</button>
            </tr>
            <tr>
        <input type="text" name="address" placeholder="주소입력" value={address}
            onkeyDown={keyDownHander}
            onChange={e => setFormdata({ ...formdata, address: e.target.value })}></input>
            </tr>
        <h2>이름 : {username}</h2>
        <h2>주소 : {address}</h2>
    </>);
}