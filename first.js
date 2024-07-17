//Creating object
//object is collection of different variables
const student={
    fullName:"akhil",
    age:21,
    cgpa:8.3,
    ispass:true,
};
console.log(student)
console.log(typeof student)
//accessing only one variable
console.log(student["fullName"]);
//changing already defined values
student["fullName"]=student["fullName"]+"Banoth"
console.log(student["fullName"])
//create a const object called "product" and store required information .you can asume your own information
const product={
    name:"ct_ballpen",
    brand:"parker",
    color:"black",
    rating:4.5,
    rating_given:7002,
    original_price:285,
    offer_price:270,
    isdeal:true,
};
console.log(product);
//bargaining offer_price
product["offer_price"]=product["offer_price"]-30;
console.log(product["offer_price"])
//check deal is present or not
console.log(product["isdeal"])
console.log(typeof product["isdeal"])
//practice question-create a const object called "profile" to store information of instagram profile
//creating object profile
const profile={
    user_name:"akhil_ak316",
    isfollowing:true,
    no_of_follwers:120,
    following:50,
    public_profile:false,
};
console.log(profile);
console.log(profile["isfollowing"]);
console.log(typeof profile["user_name"])