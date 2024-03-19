//Сравнение number
let a = 1;
let b = 23;
console.log(a==b, b!=a, a<b, a>b,a<=b, a>=b, a===b);

//Сравнение string (сравнивается по UNICODE)
let c = 'Number';
let d =  'Boolean'; 
console.log(a<b);
//Сравнение string и number (сравнивается по UNICODE)
console.log(a>d);

//Boolean (true = 1, false =0)
let e = true;
let f = false;
console.log(e>f);

//null
let age = null;

//undefined
let j;
console.log(j);

console.log(null === undefined);
console.log(null == undefined); //При нестрогом равенстве ==
//Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.
