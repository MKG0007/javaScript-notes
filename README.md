# javaScript-code
---


## API fetching
### old ways of API fetching: XLMhttpRequest

Value	State	Description
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.

it is the method ---> 
```javascript
    const requestUrl = 'https://api.github.com/users/hiteshchoudhary'//api url stored in the variable
    const xhr = new XMLHttpRequest();//creating a object
    xhr.open('GET', requestUrl)//takes method and string(request url)
    xhr.onreadystatechange = function(){//this is the method use to check the change on the states
//every time the state change automatically function calling occure
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)// be most of the time get data in the form of string
//so, we have to convert it into json format(for conversion we use this)
            console.log(typeof data);
            console.log(data.followers);
        }
    }
    xhr.send();

```
## Note:- 
to use the api fetch data we can define it variable out side the state handler and intiallized in it when the data sucessufully fetched 
state handler like **onreadyStateChange** , **onload**

---

## promise:-
in simple words , as we know that js is single threaded language and due to brower features it behaves like a asynchrous manner
so, in most of the task can't be exicuted right after the reaquest because of that we use promise to assure the completion of the task.

### promise creation --->
```javascript
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

```
we don't have to store the promise inside the variable
```javascript
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

```
promise with 'then' , 'catch'-->
```javascript
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true//to check the error if there any
        if (!error) {
            resolve({username: "hitesh", password: "123"})//value goes to "then"
        } else {
            reject('ERROR: Something went wrong')//handle by catch()
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {//return data by next then
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))//it gives the final verdict 

```
handling promise by using 'async' and 'await 
```javascript
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});//promise creation 

async function consumePromiseFive(){//async function for handling promise responses
    try {//as we also through reject and to handle it we have to use try catch inside the function
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();//async function calling
```

full working of async await and fetching the api in real time -->
```javascript
 async function getAllUsers(){
     try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
      console.log(data);
    } catch (error) {
         console.log("E: ", error);
   }
 }

getAllUsers()
```

using fetch() with then and catch(modern way of API fetching)-->
```javascript
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

```
## note-imp-> 
in case of promise  , requesting something from a api and it gives the error code 404 then it will considered as a response.

promise does not reject on http errors
it will only rejects when a network and permission issue occure


---
![](jsWorking.png)

---
### summary-->
in javaScript , there are two types of memory :-
1-heap Memory(where all got stored variable)
2-callStack(where all un-exicuted function are stored for exicution)

and this entired arrangmenet are called as js engine
and when in any function we can call 
DOM api
setTimeout and setInterval----->there calls goes to "register call back ------->stored in the task queue(waiting for exicution)

but in case of **fetch()** method ---> special queue was created which called a priority/micro task queue--->push the task in the call stack at top even before the "task queue"

which causes the api exicution first even it written after functions
that all is to it.

---

![](fetchWorking.png)

---
### summery-->
when we use fetch() method --> it requested in to parts:
1- web browser/node.js eviornment --->network request(responce or rejection)
2- data:___(where response data going to store)
-onfulfilled[]--->for response 
-onRejection[]--->for reject
after getting into either one of them and got initiallized in data_variable--->finally response shown to the user

---
## oops concept in javaScript:
in reality , javascript is the prototpe based language and its classes are primarily syntactic sugar over the existing prototype-based inheritance mechanisms.

**class:-** it is the blueprint or template for creating a object.  

**object:-** it is the instance of class and it will have the data and behavior defined by the class.  

in simple words , object is the collection of properties and methods/functions.  

## new keyword and this importance:-
**New Keyword**--> it is use to create a new instance of the object(copy of the object)  
 **working--->**  
copy object creation --> parameters are injected by the "this" keyword--> and then at the values return to the variable
```javascript
function user(username , logincount , age){
    this.username = username ;//this--> it is used here to differenciate the function variable and its arguments.
    this.logincount = logincount ;
    this.age = age;
}
const u1 = user("mayank" , 10 , 20);
const u2 = user("rohit" , 20 , 30);

console.log(u1);
conosle.log(u2);
//as we didn't used new keyword--> values was override by the second calling with there parameters
//to avoid that --> we use new keyword to make the saparate copy of the function
const u3 = new user("mayank" , 10 , 20);
const u4 =  new user("rohit" , 20 , 30);
console.log(u3);
conosle.log(u4);
```
---
![](object.png)
## node->
prototype behaviour of javaScript--> even though the there is properties methods is exist but still js try to access the ojects parent and child until it gets a zero.  
that's why javaScript considered to be follow a prototype based inheritance   

every thing in js is object and all objects have all the properties that other object in the js have 
so , if we try then function can work as a object and as a normal function both at the same.


```javascript
function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);
```

---

```javascript
function createUser(username, score){
    this.username = username
    this.score = score
}//its just a normal funtiom
//but we know --> it will also have the properties of an object
and we can add our own property into the function.prototype folder

createUser.prototype.increment = function(){//here is one custum method
    this.score++
}
createUser.prototype.printMe = function(){//her is second custum method
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)
//we can not use our custom function in case of tea because we didn't initiallized the change for it.
//for this use "new" keyword to do that
chai.printMe()//now we can call it
// and because of the syntactic sugar of the js be don't have to do the object drilling to use the function

```
---

###Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.


---
```javascript

//old time's inheritence
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
```

---
## call and this:-

```javascript
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
//if simple call the setusername function --> it exicuted and get remove from the call stack but we need the changes that it done
// so , we need the reference of that function
// but only reference can't  make changes on the parent function

// as every function have there own "this"--> so to get the changes we have to pass the parent "this" in outer function
// by doing so , outer function use the parent function this and changes will heppens in that function in which the outer got called
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
```





















