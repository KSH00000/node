function Comp(){
    const style = {
        color:"white",
        backgroundColor: "black",
        fontSize:"40px"
    }
    const modalYn = true;
    const name = "홍길동";
 return (
    <>
      {modalYn ? <div>모달</div> : null}
      {name === "홍길동" ? <div>홍길동입니다.</div> : <div>홍길동이 아닙니다.</div>}
      {/* name 이 있으면 실행 */}
      {name && <div>1홍길동입니다.</div>} {/*둘다 true인경우 이름, div출력 */}
      {/* name 이 없음면 실행 */}
      {name || <div>2홍길동이 아닙니다</div>} {/* 이름이 없는경우 div 출력*/}
      {/* 여기는 주석 */}
      <h2 style={style}>Hello</h2>
    </>
 )
}

export default Comp;