//Arithmetic operators
let a=19;
let b=10;
console.log("a=",a, "& b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);
//unary operator
a=a+1;
b=b-1;
console.log("a++=",a);
console.log("b--=",b);
//Assignment operators
c=5;
d=10;
c +=6;
d -=3;
console.log("c += =",c);
console.log("d -= =",d);
console.log("c *= =",c*=5);//now c=11 updated 11*5=55
console.log("d /= =",d/=2);//d=7 updated value
console.log("c %= =",c%=2);
console.log("d**=",d**=2);
//comparision operator
e=15;
f="15";
console.log("a == b =",e==f);
console.log("e != f =",e!=f);
console.log("a ===b =",a===b)//checks data type strictly and makes string is not equal to number
console.log("e !==f =",e !==f);
console.log("e>=f =",e>=f);
console.log("e<=f =",e<=f);
//logical operator
g=29;
h=67;
cond1= g>=h;//false
cond2= g==h;//false
console.log("cond1 && cond2 =",cond1&&cond2);//logical AND operator
console.log("cond1 || cond2 =",cond1||cond2);//logical OR operator
console.log("!(cond1<cond2) =",!(cond1<cond2))
//conditional statement
let age=13;
if(age<18)
{
    console.log("minor");
}
else if(age>60)
{
    console.log("senior");
}
else{
    console.log("major");
}
//ternary operator
let price=350;
let final = price>400 ? " not affordable" : "affordable";
console.log(final);

