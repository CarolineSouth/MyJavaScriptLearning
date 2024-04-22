//for (начало; условие; шаг) {
    // ... тело цикла ...
  //}

  for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
    alert(i);
  }

  //break

  let sum = 0;

while (true) {

  let value = 12;

  if (!value) break; // (*)

  sum += value;

}
console.log( 'Сумма: ' + sum );

//continue
for (let i = 0; i < 10; i++) {

    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;
  
    console.log(i); // 1, затем 3, 5, 7, 9
  }