function customerList(){
    fetch("http://localhost:3000/customer")
        .then(result => result.json())
        .then(result => {
            for(let cust of result) {
                const newTag =`<tr>
                                <td class="text-center">${cust.id}</td>
                                <td class="text-center">${cust.name}</td>
                                <td class="text-center">${cust.phone}</td>
                                <td class="text-center">${cust.email}</td>
                                <td class="text-center">${cust.address}</td>
                                <td class="text-center">
                                    <button class="btnUpd">조회</button>
                                    <button class="btnDel">삭제</button>
                                </td>
				              </tr>`
                list.insertAdjacentHTML("beforeend",newTag);                  
            }
        })
}
customerList();
`<tr>
                                <td class="text-center"></td>
                                <td class="text-center">${cust.name}</td>
                                <td class="text-center">${cust.phone}</td>
                                <td class="text-center">${cust.email}</td>
                                <td class="text-center">${cust.address}</td>
                                <td class="text-center">
                                    <button class="btnUpd">조회</button>
                                    <button class="btnDel">삭제</button>
                                </td>
				              </tr>`
let id = $('input id').val();
let name = $('input name').val();
let phone = $('input phone').val();
let email = $('input email').val();
let address = $('#input address').val();