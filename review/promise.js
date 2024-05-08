//filename:promise.js
function delay(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
          console.log("timeout")
          resolve()
        } , 3000);
    }) //end of Promise()
} // end of delay()
//promise
// delay()
// .then( () => console.log("call"))
// .catch( () => console.log("error"))

async function execDelay(){
    await delay() // promise객체인경우 async await 사용가능
    console.log("call");
}

execDelay();