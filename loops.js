//calculate sum of 1 to 10 using for loop
sum=0;
for(let i=1;i<=10;i++)
{
    sum+=i
}
console.log("sum =",sum);
//while loop.printing a statement 6 times using while loop
i=1;
while(i<=6)
{
    console .log("hello everyone");
    i++;
}
//do-while loop
j=13;
do{
    console.log("miss you all");
    j++;
}while(j<=10);
//for-of loop
let Name="akhilbanoth";
let size=0;
for(let val of Name)
{
    console.log("size=",size);
    size++;
}
//for-in lo0p
let student={
    Name:"akhil",
    age:21,
    roll_num:7207,
    cgpa:8.3,
    ispass:true,
};
for(let key in student){
    console.log("key=",key, "value=", student[key]);
}
//print all even numbers from 0 to 100
for(let i=1;i<=100;i++)
{
    if(i%2==0)
    {
        console.log(i,"is even number");
    }
}
//create a game where you start with any random game number.ask the user to keep guessing the game number untill the user enter correct value
let game_number=99;
let random_number=prompt("enter random_number:");
while(game_number!=random_number){
    random_number=prompt("you'r guess is wrong.try again!");
}
    console.log("you'r guess is correct");

