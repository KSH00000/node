/* filename: Comp06
   list
*/
import { useState } from "react";
import Product from "./Product";
function Comp(props) {
    let [products, setProducts] = useState([{no:1, pname:"apple", price:200},
    {no:2, pname:"item2", price:300},
    {no:3, pname:"item3", price:100},]);

    const trDel = (no) => {
        let newProducts = [];
        for(let i=0; i<products.length; i++){
            if(no !== products[i].no){
                newProducts.push(products[i]);
            }
        }
        //배열의 첫번째 요소를 삭제
        setProducts(newProducts);
    };

    const lis = products.map(p =>
        <Product key={p.no} product={p} onP={trDel}/>
    )
    return (
        <>
        <button onClick={()=> trDel()}>삭제</button>
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
        </>
    )
}

export default Comp;