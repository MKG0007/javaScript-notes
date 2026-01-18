javaScript-->

- words(words that does not have any pre-defined meaning in the programming language)
- keywords(words that have pre-defined meaning in the programming language and also contains some properties )


variables in js-->

note{

- declaration(creation of the variable without assigning value)
- initialization(creation of the variable with its first assigned value)

}

var(it is use to create the functional scoped variable)
- added in the window(object of the browser)
- function scoped
- we can declare it multiple times with the same name(gives no error)
 
let(it is use to create block scoped variable)
- can't be re-declared 
- value can be reassigned multiple times with in the scope

const(it is use to create constant variable who's value remain constant throughout the code)
- it must be declare and initialized at the same time
- can't be reassigned
- can be updated

note{

temporal dead zone:
- the time period between the creation of a variable and its initialization, during which the variable cannot be accessed.

- Attempting to access them before their declaration line will throw a Reference Error.


- Use const by default. Use let only when you planning to change the value in future.
Avoid var — it belongs to the past.
}


hoisting-->
JavaScript engine prepares memory before running code,
that time it moves all the declaration to the top.

- in simple words, when variable initialized -> it divided into two parts
declaration and initialization 
and all the declaration move to the top that we know as hoisting.

- in case of var, hoisted and set to undefined
- in case of let and const , hoisted but not set to undefined.
- so accessing them early gives ReferenceError




datatypes and type system in javascript:

1)primitive datatype(string , number , Boolean , null , undefined , symbol , bigInt)
- total 7 primitive datatypes
- pre-defined datatypes
- we can copy directly

note{
- null(intentionally given empty value to show the absence of value)
- undefined(default value given by the js engine)
}

- symbol(unique immutable value)
- Symbol is used to create unique, non-colliding object keys that remain hidden and protected from accidental overwrites.
- can't we accessed by the normal loops
let symbols = Object.getOwnPropertySymbols(user);
- return the Array of symbol present in the object
symbols.forEach(sym => {
  console.log(user[sym]); // 101
});

- let ui2 = symbol("uid1")
now we can add it into the object as a unique key value pair. 

- bigint(it is use to hold and do operations on the big integer values with accuracy )
- let num = 111111111111n , num + 12n



2)reference datatype(arrays , object , functions)
- also know as non-primitive data types
- user-defined datatypes
- we can not copy directly(gives the reference)




- dynamic typing (we can change the datatype of the variable by just assigning that datatype value)

- static typing(we can not change the datatype of the variable)
- js is the dynamically typed language 
- typeof() - it is use to know the type of the variable



type coercion:
- in of case +,
if we have a string as a operand then it always concatenate 


truth and falsy values:-

- 0 , false , "" , null , undefined , NaN and document.all
all are false
- other things are true
- to check the true nature: use !! (example-> !! null)



note{

NaN(not a number)
- type is number 
- because NaN shows the failed number operation in js


instanceof:(it is use to check weather the variable is containing the datatype you are looking for)
- val instanceof Array
- it is only use for reference datatypes 
- for primitive we use "typeof"
- example :
let num = {};
num instanceof Object // return true if matched


note{
- array is special type of object.(comes form the prototype chain)
- but object can't be array.
- Why do we use instanceof on non-primitive data types?
->Because non-primitive values are objects created from constructor functions, and instanceof checks which constructor created the object.
but primitive datatype is not created by object constructors.
}



control statements (if , else , else if , switch)



}


operators in js--->

1)Arithmetic operator(+ - / * % **)

2)Comparison operator(===[strictly equal] , == , <= , >= , < , > , = , !==[strictly unequal])

3) assignment operator(= , += , /= , *= , -= , %= )

4)logical operator(&& || !)

5) unary operator(+ , - , -- , ++ , typeof )
-> '+' we can use to convert number string into number 
by just putting sign with that string.
-> num++(post) , ++num(pre)

6)ternary operator(condition ? codeLine : codeLine;)



loops in js-->
for , while , do-while , for of , for in

for-of:
- can be use on every on iterable datatype 
- use to iterate the object with values
- direct access the values 
- let obj = {};
for(let val of obj){ return val }

for in:
- can be use on every iterable datatypes
- use to iterate the obect and others with keys
- not directly able to access values
- let obj = {};
for(let key in obj){return keys of every pair}





function in js-->

A reusable block of code that is designed to perform a specific task.
execute it when needed by just calling.
- it allow you to encapsulate logic and void repeating code.  

ways of defining function:-

- function name(){} // function statements
- let name = function(){} //function expression
- let name = ()=>{} // arrow function

parameter and arguments:-

arguments:
- variables passed to the function at the time of function invoked.

parameters:
- variables listed in the function definition.
 

note{
rest and spread operators

rest:
- when be using "...arg" as a function parameter.
- example:
function name (... args){}
name(1 2 4 4 5 5);

spread: 
- when be using "...val" in arrays and objects.
- example:
let a1 = [1 , 3,4, 5]
let a2 = [ 6 ,7 ,8];
let newA = [...a1 , ...a2]

}


first class function:-
- when the function is treated as a values
- can be passed as argument.

higher order functions:-
- function who return and accept function as a arguments
example:
function name(){
	return function (){}
}
name()();


pure and impure functions:-

pure:
function that does not affect the outside values

impure:
function that affects the outside values


closures in js:-
A function which return another function and that must be using the parent function variable is called closures.

example:
function name(){
	let a = 0;
	return function (){
		// using parent function values
		console.log(a);
	}
}



IIFE (immediately invoked function expression):-
- a JavaScript function that is defined and executed immediately after it is created.
- It runs automatically without needing to be called separately.
- example:
(function (){})()

const runTask = (() => {
  console.log("Named IIFE using arrow function");
})();

Real-world uses:
- Avoiding Global Scope Pollution
- Data Privacy / Encapsulation
- Initialization Code That Should Run Once
- 

hoisting in function expression and statements:-
- function statements follows hoisting but expressions does not follow hoisting









------------------------------------------------------------------------
arrays in js-->
let arr = [elements];
- collection of variables in one-variable is called array.
- in javaScript, array can store multiple datatypes (primitive and non-primitive both).

array methods:
push()//add the element at the end
pop()//remove the element from the end
shift()// remove the value from the start
unshift()// add the element at the start

splice(index , 0 , values) // use to add the values in the array
splice(index , number of values)//use to remove the value form anywhere of the array
- makes changes in the array.

slice(index , number of values) // same as splice but return the new array

reverse()// use to reverse the array by making changes in original array.

sort(accepts function(){

	return a - b // for ascending order
	return b - a // for descending order

}) // make changes in old one and arrange its elements in sorted form
- we must provide the function if trying we trying to sort the numeric array


String in javaScript-->
- A string in JavaScript is a primitive data type used to represent textual data.
- string is immutable in javaScript
let name = "mayank";
name.length //gives the length of the string
- all methods return a new string(modified version of the old string)
name.toUpperCase() // convert lowerCase char to upperCase
name.toLowerCase() // opposite
name.trim() //remove the extra spaces from the start and end
name.trimStart() //remove the spaces from the start only
name.trimEnd() //remove the spaces from the end only
name.substring(start , end) // return the substring
name.slice(start , end) //same but also accept negative index
name.replace("str" , "new str")// replace the first occurance only
name.replaceAll("str" , "new str")// replace all occurance
name.split("") //give the array ele according to the speration


reversing the string:
let s = "abc";
let rev = s.split("").reverse().join("");




important array methods:-

forEach(function(){})
- it is use to perform task by using all the array element one by one
- but does not return anything
- arr.forEach(()=>{})


map(function(){})
- performs the task on the array elements and return the new array
with new values
- return the new array
- new array always be of same size of the old array
- arr.map(()=>{return})

filter(function(){return})
- same as map but return new array with filtered values according to the condition
- new array can be vary in size.
- let num = arr.filter(function(){return})


reduce(function(accumulator , val){} , set accumulator);
- by default value of accumulator is 0
- return the single value after performing some operation on all the element


find(()=>{})
- use to find the value in the array who appears first and return it
- let num = find((val)=>{ return val == target})
 
some(()=>{})
- check the value is present or not in the array.
- let st = arr.some((val)=>{return val>10});
- return Boolean

every(()=>{})
- use to check that the every element is following the certain condition or not 
- return the Boolean


Destructuring:-
- separate the array values and stored in the variables.
- let arr = [1 ,2 ,4]
let {a = 0 , b = 0 , c} = arr;// given 0 as a default value to a,b
let {a , b, skip value , c} = arr;

- swap the variables
let a = 1, b = 2;
[a, b] = [b, a];

- {}(use for destructuring objects)
- [](use for destructuring arrays)







object in JavaScript:-
- when we want to store the data about the particular entity then we use objects
- let obj = {
	key: "value";
} 
- access value
obj.key  // this it will only search the value written after the dot
obj["key"]

- object nesting:
let obj = {
	name: {
	   fullname: "mayank",
	}
}
access:-
obj.name.fullname
obj[name][fullname]
- we can use destructuring to make the deep access short
let {fullname} = obj.name; //gives the "fullname" property

- Object.keys(obj) // return the array of object keys

- Object.assign({} , obj) // it is use to copy one object to another
- that can be done by spread operator very easily
- object keys can be number and Boolean too.



note{
- making deep copy of objects by using spread operator
obj = {...obj} // that only copy the 1-level keys
but in case of nested obj, it will copy as a reference 

- to avoid this problem we use json method
let newobj = JSON.parse(JSON.stringify(obj));


optional chaining in js objects:-

sometimes we trying access the kay value pair that does not present in the object 
- and due this it through the error. 
- to avoid that error
- we use:
 obj?.address?.city

}


computed properties
use the variables to add the key

let val = name;

const obj = {

	[val] : "mayank",
}







---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
nomenclature:
website element called node 


DOM(document object model):
- The Document Object Model (DOM) is a programming interface that represents an HTML or XML document as a tree structure.

- It allows programming languages like JavaScript to interact with, modify, or update the structure, style, and content of a webpage dynamically.

types of DOM nodes:

- Document Node(node of the entire html code)
- Element Node(html tag)
- Text Node(text contain by the html tag)
- Attribute Node(attributes of the element)
- Comment Node(comments inside the html)
- DocumentType Node(contain the document type)
- DocumentFragment Node
(Temporary lightweight structure for performance when dynamically building DOM)


DOM Manipulation:-

node selection in DOM

let node = document.getElementById("id_name")// select the node by its ID

let node = document.getElementsByClass("class_name")// select group of element of same class and return a HTML collection 

let node = document.querySelector("id/class/tag")// select the first element of the given field

let node = document.querySelectorAll(same)// select group of elements of same given field and return a nodeList


text manipulation:

- node.textContent = "Gets/sets all text inside a node(hidden & visible)" //fastest
  
- node.innerText = "Gets/sets visible text only" //slow

- node.innerHTML = "Gets/sets HTML markup" //slower



Attribute manipulation:
- additional information(properties) about an HTML element is know as attribute.

- node.setAttribute("attribute_name" , "value")// it overwrite that attribute

- node.getSttribute("attribute_name") // return the attribute value

- node.removeAttribute("attribute_name")// remove the given attribute 


Dynamic DOM manipulation:
- let node = document.createElement("element_name") // it is use to create node dynamically

position to attach

- body.append("node") // add the element at the last inside the selected element(body)

- body.preppend("node") // add element at first inside the selected element(body)


style manipulation:


node.style.css_name = "value" // it is use to change the styling of the element 

better way-

classList:

- node.classList.add("class_name") //add the css class in the element
- node.classList.remove("class_name") // remove the css class from the element

- node.classList.toggle("class_name")// if element have that class then it removes it and if not , then add it










Events handlers:
- multiple times events happens when user visiting any websites
- and how the website response to the events happens on the website is called event handling.


EventListener:
syntax: 
node.addEventListener("event_type" , function(action))

to remove:
node.removeEventListener("event_name" , function)


some important events:

input:
- this event will trigger when user input anything in the node
- mostly used in the form fields
- value access: node.data
- example:
input.addEventListener('input' , (e)=>{
      p.textContent = `${e.target.value}`;
})


change:
- this event will trigger when any change happens in the text , input and select fields
- value access: node.target.value


keydown:
- this event will trigger when any key is pressed by the user of its keyboard
- value access: node.key(give the change value)


small practice:
    <script>
        let btn = document.querySelector('button');
        let ipt = document.querySelector('input');

        btn.addEventListener('click' , (e)=>{
            ipt.click();
            console.dir(ipt);
        })
        ipt.addEventListener('input' , (e)=>{
            console.log(e);
            let filename = e.target?.files[0]?.name;
            if(filename){
                btn.textContent = `${filename}`;
            }
            else{
                btn.textContent = "choose";
            }
        })
    </script>


mouseover:
when the curser on the element
mouseout:
when the cursor leave the element

mousemove:
when the curser move on the element

    <script>
        let div = document.querySelector('div');
        window.addEventListener('mousemove' , (e)=>{
            div.style.top = e.clientY + "px";
            div.style.left = e.clientX + "px";
        })
    </script>




note:
- when event raised it runs in two phases(propagation)
phase-
1- top level to low level(capturing phase)
2- low level to top level(bubbling phase)
- phase1 is by default off
- to 'on' the phase1
node.addEventListener(()=>{} , true);


event bubbling:
- when the some event occur on the element and there is no event handler added for it then it will try to find it on node's parent node and goes on.

how to stop event bubbling:
e.stopPropagation() //Stops the event from moving to parent elements.
e.stopImmediatePropagation() //it stops bubbling and other events on the same element



event capturing:
opposite of event bubbling
parent node --> child node

-------------------------------------------------------------------------------------------------------------------------

form validation:

to form validation(use regex code):
- const regex = /^[a-zA....]

- regex is use to apply the condition on the input for validation
- if(regex.test(val)) return true;
else return false;




---------------------------------------------------------------------------------------------------------

Timers and Intervals:

setTimeout(()=>{} , time(miliSec))
 - it is use to do something at the defined time once
- takes time in mili-seconds
- to stop:
let st = setTimeout();// that contains the event ID
clearTimeout(st);// that remove the setTimeout()



setInterval(()=>{} , time(miliSec))
- it is use to do something at every interval of given time.
- takes time in mili-seconds too
- to stop:
let st = setInterval();
clearInterval(st) // 

--------------------------------------------------------------------------------------------------------

local Storage:
- storing the data in the browser and that will not vanish even the browser gets off.(browser database)

session storage:
- storing the data temporarily for the period of time(one browser session)


cookies:
- it store only light weight data in the cookies property of the browser 
- fast access


how to save data:

- localStorage.setItem("name" , "mayank")// stored in the browser database
- localStorage.getItem("name") // fetch the value from the browser's data
- localStorage.removeItem("name") // remove the data 
- localStorage.setItem("name" , "Gupta")//update the present data and if not present then create that data
- localStorage.clear() // to clear all data


sessionStorage
- same as localStorage just the data stored for temporarily until the tap is not closed


cookies
- storage space: ~4KB
- saved data will removed after page reload

document.cookie = "gamil"; // way of storing cookie


note:
- we can only store string in the localStorage 

- to store arrays and object in the localStorage we use JSON.stringfy(data) to convert the data into string

- to access its original form we JSON.parse()


practice-->

it give the object that contains the object that have the Boolean property
to know the system mode(dark and light)
- true(dark)
- false(light)
window.matchMedia('(prefers-color-scheme: dark)').matches


code:
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change" , ()=>{

     if(window.matchMedia('(prefers-color-scheme: dark)').matches){
	document.querySelector('body').ClassList.add('dark');
	document.querySelector('body').ClassList.remove('light');
      }
     else{
	document.querySelector('body').ClassList.add('light');
	document.querySelector('body').ClassList.remove('dark');	

      }
})




-------------------------------------------------------------------------------------------------------------------------------------------

scope , execution and clouser:

scopes:
- functional scope(can only be use within the function)
- global scope(can be throughout the code)
- block scope{}( can only be use within the bracket)

lexical scoping:
- if we have the function that contains the another function then that nested function can access the parent functions variables but parent function can not access the variables of nested function's variables.
that how lexical scoping works
- JavaScript follow lexical scoping.

dynamic scoping:
- variable scope depends on the location there the function called
that how dynamic scoping works


execution context:
- it is the process that used by JavaScript before running the functional code
- process have two phase(memory phase and execution phase)

- in simple words, it is the hippothetical scenario in which there are two phases 
like memory phase(allocation) and execution phase(operations , code run) that happens before the function run.

closure 
- if we have the function that returns the function which is using the its variable 
that whole concept is called closure
benefit:
- make the variable private 
- avoid the global pollution

- as we know, after function execution that function will remove from the memory space but when closure happens then it create the backlink of that parent function's variables and the whole function -->copy stored in-->[[environment]]
- every time you call the closure function then it will create the sperate block (context) each time.

example: private counter
function countercall(){
   int count = 0;
   return  ()=>{count++;
	console.log(count);}
}

int func1 = countercall(); //sperate block
funct1() // counter = 1;
funct2() // counter = 2;

int funct2 = countercall(); //sperate block
func2() // counter = 1;
func2() // counter = 2;

[homework- toaster notification]




"this" keyword:
-the nature of the "this" happens to change according to the place you are using it.
-in global scope, value of "this" is window object
-in function scope, value of "this" is window object
-in method(function inside object) , value of "this" is object(parent of the function)
-in event handler, value of "this" is node on which the event is added.
-in classes , value of "this" is blank object
-method with es5 function -> this = object
-method with es6 arrow function -> this = window

note: 
-arrow function always takes there this value from the parent "this" entity
-in case of normal function , this is parent

call apply binding:
- we can set the value of this at the time of function calling

call:
at the time of calling 
to the value:
func.call(obj , can pass arguments here) \\ setting "this" = obj;


apply:
in case of apply,
we can only send two arguments 
- value you want to set in "this"
- arguments in the form of array

func.apply(obj , [arguments])

bind:
-syntax wise same as call
- but it return the new function with updated "this" value
let newfunc = func.bind(obj , arguments)

homework- form user addition


--------------------------------------------------------------------------------------------------------------------------------------------
object oriented programming in JavaScript:

through construction function:
function CreatePencil(name , price , color, company){ //construction function
	this.name = name;
	this.price = price;
	this.color = color;
	this.company = company;
}

- when be call function by using new keyword then "this" value change into blank object.
- and function the return the object of the properties
- construction function name should be start with  uppercase
let pencil1 = new CreatePencil("apsawra" , 10 , "gray" , "apsawra")
let pencil2 = new CreatePencil("doms" , 10 , "blue" , "doms")

-if there is any constant field whose value was same for all the objects
then there is no need to write it in the construction function(takes extra space )
to void this use of extra space, we can add that property in to prototype and that way property automatically added to all the objects created by that construction function. 
- CreatePencil.prototype.company = "mayank";

through classes and object(syntactical sugar):

class CreatePencil{
	constructor(name , company , price , color){
	  this.name = name;
	  this.company = company;
	  this.price = price;
	  this.color = color;
	}
	write(text){
	let h1 = document.createElemet('h1');
	h.textContent = text;
	h1.style.color = this.color;
	document.body.appendChild(h1);
	}

}

let p1 = new CreatePencil("nataraj" , "nataraj" , 10 , "red");


inheritance in JavaScript:
- the way by using class can inherit the properties of another class
- by the use Extends keyword
- example:
class Animal{ properties }
class Dog extends Animal{ have properties of animal and dog }
- when class inherit another class then to initialize values of inherit class then we have to call the constructor of the parent class inside the child class constructor by using "super()" keyword
- after that create the derived class variables

prototypal inheritance(only happens JavaScript):
example:
let coffee = {properties}

//this way prototype of both object connected to each other
let blackCoffee = Object.create(coffee)
we can define the properties of "blackCoffee":
blackCoffee.propertyName = "value";
 
sync and async:
- when code executes line by line then is it know as sync code
- when code executes when it ready for it and some other code line already executed because of its ready phase then that code is know as async code

callback:
- when we are pass the any function as a argument in another function then that function is know as callback.


callback hell:
- when we create a function to do the some task and after that task we want another task with data we get doing the previous task.
- to do that we mention the callback of the function inside the first function(passed as a argument) and also pass the data we get because of first function as a argument in that callback.
- group of function run one after another because of the callback that situation is know as callback hell.
 
example:
function profiledetails(name , gmail , func){

	setTimeout(()=>{
	 console.log("here is my profile details you are looking for:");
	func({name , gmail});

	} , 2000)
}

profiledetails("mayank" , gmail , function(data){
	console.log(`name: ${data.name}`);
	console.log(`Email ID: ${data.gmail}`);

})


promises:


promise have three states
- pending
- reject 
- resolve

let pr = new promise(function (res , rej){
	setTimeout(()=>{
	  if(){
		res("mayank"); // this goes to "then"
		}else{
		 rej("gupta"); // this goes to "catch"
	  }
	} , 3000);
	
});
.then(function(val){}) //this will run when promise resolve
.catch(function(val){}) //this will run when promise reject


async/await:
- cleaner way of dealing with resolve/reject task
async function func(){
	// "await" is use to stop execution of the code until that line completed 
	try{// resolve value

	let val = await pr;

	}catch(err){// reject value

	   console.log("reject");
	 }
}



fetch API and HTTP basics:
fetch:
it is the in-built javaScript function that use to fetch the data from the API 





