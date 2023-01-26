// one
let a = 10;
alert(a);


a = 20;
alert(a);

// two

let x = 'Год выпуска айфона - 2007';
alert(x);

// three

let name = 'создатель js - Брейдан Айк';
alert(name);

// four
let q = 10;
let w = 2;

let summa = q + w;
let raznost = q - w;
let proizv = q * w;
let drob = q / w;

alert(summa);
alert(raznost);
alert(proizv);
alert(drob);

//five

const result = 2 ** 5;
alert(`2 в 5 степени это ${result}`);

// six

let s = 9;
let h = 2;

let rez = s % h;
alert(`9 разделить на 2 будет ${rez}`);

//seven
/*let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num  - 1;
alert(num);*/

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

// eight
let age = prompt("Сколько вам лет?")
alert(age);

//nine

let user = {name:"Alex", age: 20, isAdmin: true};

// 9.1
user["city of residence"] = "Moscow";

// 9.2
user.age = 27;
//9.3
delete user["city og residence"];

//9.4
let info = prompt("Какую информацию вы хотите узнать о пользователе?")
alert (user[info]);

//10
let caller = prompt('Как вас зовут?');
alert(`Добрый вечер, или привет  ${caller}`);