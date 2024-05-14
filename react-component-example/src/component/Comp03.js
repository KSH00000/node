/* filename: Comp03
   list
*/
import Product from "./Product";
function Comp(props) {
   
    const lis = props.products.map(p =>
        <Product key={p.no} product={p} />
    )
    return (
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>상품명</th>
                    <th>가격</th>
                </tr>
            </thead>
            <tbody>
               {lis}
            </tbody>
        </table>
    )
}

export default Comp;