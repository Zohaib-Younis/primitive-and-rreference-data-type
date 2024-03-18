                        //Primitive datatypes
// String type
let name="Zohaib";
console.log("my name is "+ name);

//Typeof operator
console.log("Data type is "+ (typeof name));

//number type
let mark=56;
console.log("Data type is "+ (typeof mark));
//boolean type
let isboolean=true;
console.log("Data type is "+ (typeof isboolean));
//null type
let num=null;
console.log("Data type is "+ (typeof num));     //Data type in output will be "Object" but it is not reference datatype it is basically primitive datatype
//undefined type
let undef=undefined;
console.log("Data type is "+ (typeof undef));

                        //Reference datatypes
//arr type 

let Arr=[1,2,3,4,undefined,true];
console.log("Data type is "+(typeof Arr));      // data type will be object

//object type 

let stData= {
    name:"Zohaib",
    roll:12,
    address:"Lahore",
    age:18
}
console.log(stData); //object

//function type

function findname() {
    
}
console.log("Data type is "+(typeof findname)); //function

//Date type

let date=new Date();
console.log("Data type is "+(typeof date)); // object
