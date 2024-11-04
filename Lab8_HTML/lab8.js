function Task1(){
    let letString = "Рядочок";
    let letNumber = 123;
    let letArray = [1, 2, 3];
    let letObject = {};
    let letFunction = function() {
         let funcString = "Функція";
    }
    console.log( letString + " , " + typeof(letString) );
    console.log( letNumber + " , " + typeof(letNumber) );
    console.log( letArray + " , " + typeof(letArray) );
    console.log( letObject + " , " + typeof(letObject) );
    console.log(letFunction() + " , " + typeof(letFunction()) );
}
//  Task1();
function Task2(){
    let num = 123;
    let string = "456";
    console.log("-------------Before------------");
    console.log(num + "," + typeof (num));
    console.log(string + "," + typeof (string));

    let numToString = num.toString();
    let stringToNum = parseInt(string);

    console.log("-------------After------------");
    console.log(numToString + "," + typeof (numToString));
    console.log(stringToNum + "," + typeof (stringToNum));
}
//  Task2();

function Task3(){
    console.log( 123 == "123");
    console.log(123 === "123");
}
// Task3();

function Task4(){
let num = 12345;
console.log("Beginning number:" + num);

let encryptedNum = btoa(num);//Base 64
console.log("Encripted number: " + encryptedNum );

console.log("Unencripted number: " + atob(encryptedNum));
}
// Task4();

function Task5(){

    var foo = 1;
    function bar() {
        if (!foo) {
            var foo = 10;
        }
        console.log(foo);
        // якщо ми створюємо зміну var то при виклику функції зміна піднімається наверх
        //тому зміна var foo вже оголосилася але не ініціалізувалася тому в неї значення undefined
        // а undefind в js це false а ми в умові if перевіряєм чи є зміна foo не правдива
        // умова виконується і зміній призначається значення 10
    }
    bar();

}
// Task5();

function Task6(){
    var a = 1;
    function b() {
        a = 10;
        return;
        //тут створення функції a і її виклик як і в минулому випадку піднімає var a у верх і ми ініціалізуємо локальну зміну
        // тому ми тут працюємо з локальною зміною і не міняємо значення іншої змінної a
    }
    b();
    console.log(a);
}
// Task6();
function Task7(){
  console.log("-------------Унарні------------");
    let a = 5;
    a++;
    console.log( "a++ = " + a + " (інкремент)");
    a--;
    console.log( "a-- = " + a + " (декремент)");

    console.log(typeof(a) + "(тип даних)");

    console.log("-------------Бінарні------------");
    let b = 2;
    let result = a+b;
    console.log( "a + b = " + result  + " (додавання)");
    result =  a / b;
    console.log( "a / b = " + result  + " (ділення)");
    result = a % b;
    console.log("a % b = " + result  + " (остача від ділення)");
    result = a === b;
    console.log("a === b ? " + result  + " (рівність)");
    result = a > b;
    console.log("a > b ? " + result  + " (більше)");

    console.log("-------------Тернарний------------");

    result = a !==b? "a не дорівнює b" : "a дорівнює b";
    console.log( " a !==b? \"a не дорівнює b\" : \"a дорівнює b\" = "+ result + "(тернарний)");
}
// Task7();
function Task8(){
    let beggining = "Нехай завжди буде ";
    let sun = "сонце,";
    let sky = "небо,";
    let mum = "мама.";

    console.log(beggining.concat(sun));
    console.log(beggining.concat(sky));
    console.log(beggining.concat(mum));
}
// Task8();

function Task9(arr) {
    let currentSum = 0;
    let maxSum = -Infinity;

    let tempStart = 0;
    let start = 0;
    let end = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > currentSum + arr[i]) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    console.log(maxSum);
    console.log(arr.splice(start, end + 1));
}
//  Task9([0, 1, -2, 3, -4, 5, 7, -6]);

function Task10(num1,num2){
    let result = [];
    let carry = 0;

    while (num1.length > num2.length){
        num2 = 0 + num2;
    }
    while (num1.length < num2.length){
        num1 = 0 + num1;
    }

    for (let i = num1.length - 1; i >= 0; i--){

        carry = parseInt(num2[i]) + parseInt(num1[i])+ carry;

        if (carry > 9){
            result.unshift(carry%10)
            carry = 1;
        } else{
            result.unshift(carry)
            carry = 0;
        }
    }
    if (carry ===1){
        result.unshift(carry)
    }
    console.log(result.join(''));
}
// Task10("98765432101234567890123456789012345678901234567890", "56789");

function Task11(arr1, arr2){

    let result = [...arr1];
    for (let i of arr2) {
        let index = result.indexOf(i);
        if (index !== -1) {
            result.splice(index, 1);
        }
    }
    console.log(result);
}
 Task11([1, 2, 2, 3],[2, 3]);