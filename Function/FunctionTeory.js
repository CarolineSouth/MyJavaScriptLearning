// Обьявление 
/*function имя(параметры) {
  ...тело...;
}*/

function ShowHello(){
    console.log('Hello dear students!');
}

ShowHello();
//Локальные переменные
// Переменные, объявленные внутри функции, видны только внутри этой функции
function ShowNextMessage(){
    let message1 = 'Our first task will be ...';

    console.log(message1);

}

// Внешние переменные
let User = 'Каролина';
function ShowUser(){
    console.log(User);
}
// Функция обладает полным доступом к внешним переменным и может изменять их значение.
 let User1 = 'Admin';
 function ShowUsers(){
    User1 = 'Admin2.0';
    console.log(User1);
 }