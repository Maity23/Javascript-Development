var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium',
];
 
 var a,b,c,d,e,f,g;
 
 // This statement returns the array :[8,6,7,9]
 a = elements.map(function(element) {
 return element.length;
 });
 console.log(a);
 
 // The regular function above can be written as a arrow function
 b = elements.map((element) => {
 return element.length;
 }); // [8,6,7,9]
 console.log(b);

 
 // When there is only one parameter , we can remove the surrounding paranthesis
 c = elements.map(element => {
 return element.length;
 }); // [8,6,7,9]
  console.log(c);

 
 // when only one statement in arrow function is return , we can remove return.
 d = elements.map(element => element.length); // [8,6,7,9]
  console.log(d);
