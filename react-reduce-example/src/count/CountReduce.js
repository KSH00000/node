import React, {useReducer} from "react";

function countReducer(count, action){
    if(action.type == 'up'){
        return count+1;
    }else if(action.type == 'down'){
        return count-1;
    }else if(action.type == 'reset'){
        return 0;
    }
}

export default function App(){
    //const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(countReducer, 0)
    function down(){
        //setCount(count-1)
        //reducer dispatch 호출
        dispatch({type: "down"})
    }

    function up(){
        //setCount(count+1)
        dispatch({type: "up"})
    }

    function reset(){
        //setCount(0)
        dispatch({type: "reset"})
    }
    return(
        <div>
            <h1>CountReduce</h1>
            <span>{count}</span>
            <button type="button" onClick={up}>up</button>
            <button type="button" onClick={down}>down</button>
            <button type="button" onClick={reset}>reset</button>
        </div>
    )
}