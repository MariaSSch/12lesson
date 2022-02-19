/*const lst = [23, 5, 2, 3, 6, 56, 34, 32];

for (let i = 0; i < lst.length; i++) {
    if (lst[i] % 2 === 0) {
        console.log(lst[i]);
    }
 }

//
let x = 0;
for (let i = 0; i < lst.length; i++) {
    x = x + lst[i];
} 
console.log(x);
*/

//id, name, lastname, age

//Array

const user = [1, 'Masha', 'Sch', 38];

console.log(`Hello! ${user[1]} ${user[2]}!`);

//object
const user_obj = {
    id: 1,
    name: "Masha",
    lastname: "Sch",
    age: 38
};

console.log(`Hello! ${user_obj["name"]} ${user_obj["lastname"]}!`);

//Array of Objects
const users = [];

users.push({ //0
    id: 1,
    name: "Masha",
    lastname: "Sch",
    age: 38
});

users.push({ //1
    id: 2,
    name: "Kolya",
    lastname: "Ivanov",
    age: 15
});
users.push({   //2
    id: 3,
    name: "Sasha",
    lastname: "Sidorov",
    age: 18
});

console.log(users); //three arrays

/*for (let i = 0; i < users.length; i++) {
    const user_1 = users[i];
    console.log(`Hello ${user_1.name} ${user_1.lastname}`);
}

for (let i = 0; i < users.length; i++) {
    const user_2 = users[i].name;
    const user_2 = users[i].lastname;
    console.log(`Hello ${name} ${lastname}`);
}

for (let i = 0; i < users.length; i++) {
    const {name, lastname} = users[i];
    console.log(`Hello ${name} ${lastname}`);
}
*/



/*let age_Sum = 0;
let number = users.length;

for (let i = 0; i < users.length; i++) {
    const {age} = users[i];
    age_Sum += users[i].age; 
    let age_Aver = age_Sum/number;

    if (users[i].age > age_Aver) {
        const {lastname, name} = users[i];
        console.log(`Hello ${name} ${lastname}`);
    }
}
*/
/*
function power(value, p) { //если p=4 присвоено значение, то при вызове Ф можно её значение не указывать
    let result = value ** p;
    return result;
}

let p_1 = power(4, 2);
let p_2 = power(12, 3); //можно здесть задать значения value = 12 p = 3. но местами менять нельзя, 
                        //и может переопределить переменные с такими же именами в коде. 
let p_3 = power(0, 12);

console.log(p_1, p_2, p_3);
*/
/*
function range(a) {
    let array = [];
    for (i = 0; i < a; i++) {
        array.push(i);
    } return array;
}

let x = range(9);
console.log(range(12));

*/
/*
function range_1(start, end) {
    let array = [];
    for (let i = start; i < end; i++) {
        array.push(i);
    } return array;

}

let x = range_1(4, 9);
console.log(x);

console.log(range_1(4, 9));
*/

/*function range_2(a, b) {
    let array = [];
    if (a < b) {
        for (a; a < b; a++) {
            array.push(a);
        }
    } else {
        if (b < a) {
            for (b; b < a; b++) {
                array.push(b);
            }
        }
    } return array;
}

let x = range_2(4, 9);
console.log(x);

console.log(range_2(4, 9));
*/

function range_2(a, b) {
    let array =[];
    let start, end;
    if (a >b) {
        start = b;
        end = a;
    } else {
        start = a;
        end = b;
    } for (let i = start; i < end; i++) {
        array.push(i);
    } return array;
}
/*
function range_3(a, b, c = 1) {
    let array =[];
    let start, end;
    if (a >b) {
        start = b;
        end = a;
    } else {
        start = a;
        end = b;
    } for (let i = start; i < end; i += c) {
        array.push(i);
    } 
    return array;
}*/
/*
function range_3(a, b, c) {
    let array =[];
    let start, end;
    if (a >b) {
        start = b;
        end = a;
    } else {
        start = a;
        end = b;
    } for (let i = start; i < end; i += c) {
        array.push(i);
    } return array;
}

console.log(range_3(4, 15, 2));
*/
/*
function triangle(a, b, c) {
    if ((a+b) > c && (a+c) >b && (c+b)>a) {
        return true;
    } else {
        return false;
    }
}
console.log(triangle(3, 2, 1));
*/

function triangle(a, b, c) {
    return ((a+b) > c && (a+c) >b && (c+b)>a); //short note
}
console.log(triangle(3, 2, 4));