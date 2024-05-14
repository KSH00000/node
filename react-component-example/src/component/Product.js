function Product(props) {
   // const { no, pname, price,  } = props.product;
   const p = props.product;
    return (
        <tr onClick={() => props.onP(p.no)}>
            <td>{p.no}</td>
            <td>{p.pname}</td>
            <td>{p.price}</td>
        </tr>
    )
}

export default Product;