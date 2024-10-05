console.log("hello");

// JS - array
const fruits = ["apple", "pear", "grape", "lemon"];
console.log(fruits);

const firstItem = fruits[0];
console.log(firstItem);

const lastItem = fruits[fruits.length - 1];
console.log(lastItem);

// modificarea unui element in array
fruits[1] = "orange";
console.log(fruits);

// adaugarea de elenemte in array
const newFruit = "banana";
fruits.push(newFruit); // adauga newFruit la capatul array-ului
console.log(fruits);

// stergerea unui element din array
fruits.pop(); // sterge ultimul element din array
console.log(fruits);

fruits.shift(); // sterge primul element din array
console.log(fruits);

fruits.unshift("cherry"); // adauga un element la inceputul array-ului (la index 0)
console.log(fruits);

// aflarea indexului unui element din array
const indexOfCherry = fruits.indexOf("cherry");
console.log(indexOfCherry);

// extragerea unui subset din array
const fruitsSubset = fruits.slice(1, 3);
console.log(fruitsSubset);

// modificarea unui array 
fruits.splice(1, 2);
console.log(fruits);

fruits.splice(1, 0, "blueberry", "strawberry");
console.log(fruits);

const allFruits = fruits.concat(fruitsSubset);
console.log(allFruits);


// JS - Objects
const person = {
    name: "John",
    surname: "Doe",
    age: 31,
    address: {
        street: "Florilor",
        number: 123
    },
    contact: {
        phone: "0711237483",
        email: "j_doe@unknown.com"
    },
    hobbies: ["hiking", "fishing", "chess"]
};

console.log("person name: ", person.name);
console.log("person hobbies: ", person.hobbies);
console.log("person phone: ", person.contact.phone);
console.log("person surname: ", person["surname"]); // same thing another metod

// modificarea proprietatilor unui obiect
person.name = "George";
console.log("person: ", person);

// compararea de obiecte

const obj1 = {a: 1};
const obj2 = {a: 1};
console.log("obj1 === obj2 : ", obj1 === obj2);

const obj3 = obj1;
console.log("obj3 === obj1: ", obj3 === obj1);

// JS - Date
const now = new Date();
console.log(now);

const yesterday = new Date("2024-10-04 12:00:00");
console.log(yesterday);

// Date methods
// accesarea proprietatilor unui obiect Date
console.log("now.getDate(): ", now.getDate()); // returneaza ziua de pe obiectul date
console.log("now.getDay(): ", now.getDay()); // returneaza ziua din saptamana
console.log("now.getFullYear(): ", now.getFullYear()); // returneaza anul
console.log("now.getMonth(): ", now.getMonth()); // returneaza indexul corespunzator lunii intr-un array de 12 obiecte
console.log("now.getHours(): ", now.getHours()); // returneaza ora
console.log("now.getMinutes(): ", now.getMinutes()); // returneaza minutele de pe obiectul date
console.log("now.getMilliseconds: ", now.getMilliseconds());

// setarea proprietatilor unui obiect Date
yesterday.setFullYear(2023);
console.log("yesterday: ", yesterday);

yesterday.setMonth(6);
console.log(yesterday);

yesterday.setDate(21);
console.log(yesterday);

yesterday.setHours(21);
console.log(yesterday);

yesterday.setMinutes(36);
console.log(yesterday);

yesterday.setSeconds(15);
console.log(yesterday);

// adaugare de zile intr-un obiect date
yesterday.setDate(yesterday.getDate() + 2);
console.log(yesterday);

// diferenta dintre doua date in milisecunde
const difference = now - yesterday;
console.log("difference: ", difference);

// formatarea unei date
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const weekDay = now.getDay();
const hour = now.getHours();
const minutes = now.getMinutes();
const months = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "October", "Noiembrie", "Decembrie"];
const weekDays = ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Saturday"];

const formatedDate = `Year ${year}, month ${months[month]}, day ${day}, ${weekDays[weekDay]}, time: ${hour}:${minutes}`;

console.log(formatedDate);

const newDate = new Date();
const timeStamp = newDate.getTime();
console.log(newDate);
const fromTimeStamp = new Date(timeStamp - 500000);
console.log("fromTimeStamp: ", fromTimeStamp);