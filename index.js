const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Newnumbers=numbers.filter((a)=>a%2==0);
console.log(Newnumbers);
const words = ['apple', 'banana', 'cherry', 'date'];
const Newwords=words.map((a)=> a.charAt(0).toUpperCase()+a.substr(1));
console.log(Newwords);
const numbers2 = [10, 20, 30, 40, 50];
const sum=numbers2.reduce((a, b)=>a+b);
console.log(sum);
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Bob'}
  ];
  const findUser=users.find(users=>users.id===2)
  console.log(findUser);
  const arr1 = [3, 1, 5];
const arr2 = [2, 4, 6];
const newArr=arr1.concat(arr2).sort();
console.log(newArr);
const students = [
    {name: 'John', grade: 'A'},
    {name: 'Jane', grade: 'B'},
    {name: 'Bob', grade: 'A'},
  ];
  const newstudents=Object.groupBy(students, ({grade})=>grade);
  console.log(newstudents);
  const numbers3 = [1, 2, 3, 4, 5, 6];
  const newnumbers3=numbers3.filter((a)=>a%2===0).map((a)=>a*2).reduce((a,b)=> a+b)
  console.log(newnumbers3);
  const nestedArray = [1, [2, 3], [4, [5, 6]]];
  const NewnestedArray=nestedArray.flat(Infinity);
  console.log(NewnestedArray);
  const numbers4 = [2, 4, 6, 8, 10];
  const Newnumbers4=numbers4.every((a)=> a%2===0);
  console.log(Newnumbers4);
  const numbers5 = [1, 3, 5, 7, 9, 10, 11];
  const firstNumber5=numbers5.findIndex((el)=> el%2===0);
  console.log("firstIndex =",firstNumber5);
  const prices = [100, 200, 300, 400, 500];
  const newPrice=prices.map((price)=>price=price-price*0.1)
  console.log(newPrice)