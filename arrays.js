//creating array
let age=[67,47,57,58,88,95,90];
console.log(age);
console.log(age.length);//length of array
console.log(age[2]=100);//at 2nd index age is changed to 100
for(let index=0;index<age.length;index++){
    console.log(age[index]);
}
//for a given array with marks of students=[85,97,44,37,76,60].find the average marks of the entile class
let student_marks=[85,97,44,37,76,60];
a=student_marks.length
console.log(a);
sum=0;
for(let i of student_marks)
{
    sum+=i;
}console.log(sum);
console.log(`let average marks of the class= ${sum/a}`);
//5 items_price=[250,645,300,900,50].each item has 10% offer.find its original price*/
let items=[250,645,300,900,50];
for(let j=0; j<items.length; j++)
{
  let offer=items[j]/10;
  items[j] -= offer;  
}
console.log(items);
//array methods()
let vehicles=["car","tractor","auto","bike"];
console.log(vehicles.push("lorry","dozer","jcb"));//push()add at end
deleted=vehicles.pop()
console.log(vehicles.pop());//pop() remove last element and return
console.log(deleted);//retuens deleted item
console.log(vehicles.toString());//coverts array to string
let company=["mercedez","glamour","mahindra","pulsar"];
console.log(vehicles.concat(company));//joins two arrays
console.log(company.unshift("alto"));//add element in starting
remove=company.shift()
console.log(remove);//remove element in starting
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
console.log(companies);
companies.splice(2,1,"ola");
console.log(companies);
console.log(companies.push("Amazon"));


