//How to compare two JASON have the same properties without order?
// a. var obj1={name:"Person 1", age:5};
//b. var obj2={age:5,name:"Person 1"};

//solution

var obj1={"name":"sudhakar","age":25};
var obj2={"age":25,"name":"sudhakar"};
console.log(JSON.stringify(obj1)===JSON.stringify(obj2));