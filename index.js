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

// ai ramas la 1:08:49