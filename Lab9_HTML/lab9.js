function Task1(){
    const startLength = 9;
    const  maxSteps = 5;

    for (let i = 1; i <= maxSteps; i ++) {
        console.log('*'.repeat(startLength + i * 2));
    }
    for (let i = maxSteps ; i >= 1; i--) {
        console.log('*'.repeat(startLength + i * 2));
    }
}
// Task1();
function Task2_Variant1(){
    const endTime = Date.now() + 10000;

    while (true) {
        const remainingTime = endTime - Date.now();

        if (remainingTime <= 0) {
            console.log("Таймер завершився");
            break;
        }
    }
}
//  Task2_Variant1();

function Task2_Variant2(){
    const endTime = Date.now() + 10000;
    let remainingTime;

    do {
        remainingTime = endTime - Date.now();
    }
    while (remainingTime > 0)
    console.log("Таймер завершився");
}
// Task2_Variant2();

const car ={
    speedometer: 0
};

Object.defineProperty(car, "setSpeed",{
    value: function (value){
        this.speedometer = value;
        return this;
    }
});

Object.defineProperty(car, "getSpeed",{
   value: function (){
       console.log(this.speedometer)
       return this;
   }
});
Object.defineProperty(car,"clearSpeed",{
    value: function (){
        this.speedometer = 0;
        return this;
    }
});

class Book{
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;


    }
    getSummary(){
        return `${this.title} was written by ${this.author} and has ${this.pages} pages`;
    }

    isLongBook(){
        return this.pages > 300;
    }

    getReadingTime(averageSpeed){
        return `${this.pages / averageSpeed} hours`;
    };
}

let book1 = new Book("Surgeon", "Tess Gerritsen", 464);

class Student{
    constructor(name, age, courses) {
        this.name = name;
        this.age = age;
        this.courses = courses;
    }
    addCourse(newCourse){
        if (this.courses.includes(newCourse))
            throw new Error("Студент вже записаний на цей курс!!");
        this.courses.push(newCourse);
    }

    removeCourse(course) {
        const index = this.courses.indexOf(course);
        if (index > -1) {
            this.courses.splice(index, 1);
        } else {
           throw new Error("Студент не записаний на такий курс");
        }
    }

    isTakingCourse(course){
        return this.courses.includes(course);
    }

    GetSummery(){
        return `Student ${this.name} is ${this.age} old and take this courses${this.courses}`
    }

}

const studentNew = new Student("David", "17", ["webbasic", "physic", "math"]);

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    isOld(){
        return this.age >= 18;
    }
    introduce(){
        return `Привіт, я ${this.name} мені ${this.age}`
    }
}

const  newPerson = new Person("Настя", 18);

class Teacher extends Person{
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach(){
        return `${this.name} вчить ${this.subject}`;
    }
}

const bilak = new Teacher("Юрій Юрійович", 48, "фізика");

class Child extends Person{
    constructor(name, age, friends) {
        super(name, age);

        this.friends = friends;

    }
    getFriends() {
        return `${this.name} дружить з ${this.friends.join(", ")}.`;
    }

    addFriend(friend) {
        this.friends.push(friend);
    }

}

const danya = new Child("Даніель","9", ["Аня","Дарина","Кирил"]);

class Teenager extends Child{
    constructor(name,age,friends,school,grades) {
        super(name,age,friends);
        this.school = school;
        this.grades = grades;
    }

    getSchool(){
        return `${this.name} вчиться ${this.school}`;
    }
    getAverageGrade(){
        let sum = 0;
        for (let val of this.grades){
            sum += val;
        }
        return sum /this.grades.length;
    }
}

const  teen = new Teenager("Юля", 15, ["Оля", "Міша", "Настя"], "Ліцей 'Лідер'", [12,10,9,11,10]);

// console.log({}.toString(), typeof({}));
//перше значення тобто object вказує нам на тип даних з яким ми працюєм так як це круглі дужки то це object
// //друге значення Object це тип обєкта, тобто те що ми маємо справу з екземпляром Object

// console.log([].toString(), typeof([]));
//тому що метод toString працює до елементів масиву а не до самого масиву

Array.prototype.toString = function (){
    return "[object Array]"
}
console.log([].toString())