const Student = (props) => {
    //const {no,name} = props;
 return (
    <div>
        <h3>학번 : {props.no}</h3>
        <h3>이름 : {props.std}</h3>
    </div>
 )
}

export default Student;