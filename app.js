

function num1() {

    let n = +prompt('n sonini kiriting');
    let number = {
        a: 2,
        b: 5,
        c: 6,
        d: 8,
    };

    number.a = number.a * n;
    number.b = number.b * n;
    number.c = number.c * n;
    number.d = number.d * n;
    console.log(number);
}





function num2() {

    const books = [
        { 
            title: "Halqa", 
            author: "Akrom Malik", 
            read: false 
        },
        { 
            title: "Dunyoning ishlari", 
            author: "Otkir Hoshimov", 
            read: true 
        },
        { 
            title: "Iymon", 
            author: "Shayx Muhammad Sodiq Muhammad Yusuf", 
            read: true 
        },
    ];
    
    books.forEach(book => {
        if (book.read) {
            console.log(`${book.author} ning ${book.title} kitobi o‘qilgan`);
        } else {
            console.log(`${book.author} ning ${book.title} kitobi o‘qilmagan`);
        }
    });

}



  






// function num3(animals) {
//     const result = {};

//     for (let i = 0; i < animals.length; i++) {
//         const animal = animals[i];
//         if (result[animal]) {
//             result[animal]++;
//         } else {
//             result[animal] = 1;
//         }
//     }

//     return result;
// }

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'rabbit', 'chicken'];

// console.log(num3(animals));










// function num4(people) {

//     people.sort((a, b) => a.age - b.age);

//     const minAge = people[0].age;
//     const maxAge = people[people.length - 1].age;

//     return maxAge - minAge;
// }

// const people = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 },
// ];

// console.log(num4(people));









// function num5(b) {
//     const a = b.split(" ");
//     let kichik = a[0];
//     let katta = a[0];

//     for (let i = 1; i < a.length; i++) {
//         if (a[i].length < kichik.length) {
//             kichik = a[i];
//         }
//         if (a[i].length > katta.length) {
//             katta = a[i];
//         }
//     }

//     return { kichik, katta };
// }

// const b = "Men dasturlash kursida oqiyman";

// console.log(num5(b));








// function num6(...numbers) {
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     return [numbers.length, sum];
// }

// console.log(num6(1, 22, 3));
// console.log(num6(5, 10, 15));







// function num7(obj) {
//     const result = [];
//     for (let key in obj) {
//         result.push(`${key}${obj[key]}`);
//     }
//     return result;
// }

// const input = { a: 2, b: 5, c: 7 };

// console.log(num7(input));









// function num8(obj) {
//     const values = Object.values(obj);
//     const totalSum = values.reduce((acc, value) => acc + value, 0);
//     const digitSum = totalSum
//         .toString()
//         .split("")
//         .reduce((acc, digit) => acc + parseInt(digit), 0);
//     return { totalSum, digitSum };
// }

// const input = { a: 1, b: 22 };

// console.log(num8(input));





// function num9(number) {
//     return number.toString().length;
// }

// console.log(num9(12345));
// console.log(num9(7));









// function num10(number) {
//     return parseInt(number.toString().split("").reverse().join("")); 
// }

// console.log(num10(12345));
// console.log(num10(700));
