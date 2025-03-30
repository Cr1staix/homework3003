// Первое задание

let mounts = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "December" ];
mounts = mounts.reverse();
console.log(mounts);
console.log(mounts[mounts.length - 1]);
let deleteMount = mounts.pop();
console.log(deleteMount);
mounts.push(deleteMount);
console.log(mounts)


// Второе задание

let evenDigits = [];

for(i = 0; i < 10; i++){
    let requestDigits = prompt(`Введите 10 чисел.  ${i} из 10`);
    let digit = Number(requestDigits);

    if(digit % 2 == 0){
        evenDigits.push(digit);
    }
}

alert(evenDigits);

// Третье задание

const dayOfWeek = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
let requestDays = [];

for(let u = 0; u < 7; u++) {
    let day = prompt(`Введите день ${u+1} из 7`).toLowerCase();
    if(dayOfWeek.includes(day)) {
        requestDays.push(day);
    }
}

alert("Дни недели: " + requestDays);

// Четвёртое задание

let digitsArray = [];
for (index = 0; index < 5; index++) {
    let requestDig = +prompt(`Введите 5 чисел.  ${index} из 5`)
    if(typeof requestDig != "number"){
        alert(`Неверный формат ввода`);
        break;
    }else {
        digitsArray.push(requestDig)
    }
}
let minValue = digitsArray[0];
let maxValue = digitsArray[0];
let avgSum = 0;

for (index1 = 0; index1 < digitsArray.length; index1++){
    if(digitsArray[index1] < minValue){
        minValue = digitsArray[index1];
    }
    if (digitsArray[index1] > maxValue){
        maxValue = digitsArray[index1];
    }
    avgSum += digitsArray[index1]
}
let arithmeticMean = avgSum / digitsArray.length;

alert(`Минимальное число = ${minValue} .\n Максимальное число = ${maxValue} .\n Среднее арифметическое = ${arithmeticMean}.`)

// Пятое задание

let targetWord = prompt(`Напишите какое-то слово`);

let words =[];

for(y = 0; y < 5; y++){
    let someWord = prompt(`Введите 5 слов - сейчас: ${y} из 5`);
    words.push(someWord);
}
words.push(targetWord);

const lastIndex = (words.length - 1);

let getIndex = words.indexOf(targetWord);

if(getIndex == 0){
    alert(`Элемент слева: ${words[lastIndex]},\n Элемент справа : ${words[1]} `);
}else if (getIndex == lastIndex){
    alert(`Элемент слева: ${words[lastIndex - 1]},\n Элемент справа : ${words[0]} `);
}else {
    alert(`Элемент слева: ${words[getIndex - 1]},\n Элемент справа : ${words[getIndex + 1]} `);
}

// Шестое задание

let evenLengthWord = [];
let addLengthWord = [];

for(q = 0; q < 10; q++) {
    let anyWord = prompt(`Введите 10 слов - сейчас: ${q} из 10`);
    if(anyWord.length % 2 == 0){
        addLengthWord.push(anyWord);
    }else {
        evenLengthWord.push(anyWord);
    }
}
alert(`Массив слов, длина которых чётное число : ${addLengthWord} \n
 Массив слов, длина которых нечётное число : ${evenLengthWord} `);