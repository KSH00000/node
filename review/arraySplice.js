//filename:arraySplice.js
//splice는 원본배열자체를 바꿈
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // 0이면 추가  splice(인덱스,추가/삭제선택, 값)
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May'); // 1이면 삭제후 추가
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

months.splice(3, 1, 'Yedam');
console.log(months);
// ['Jan','Feb','March','Yedam','May']