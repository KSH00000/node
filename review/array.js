console.log('array test');
const months = ['March', 'Jan', 'Febddddd', 'Decddd'];
months.sort();
console.log(months);
months.sort( (a,b) => a.length - b.length);
console.log(months);