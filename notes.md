# <--JavaScript Notes-->
### basic terms:  
- **words**(that does not have any pre-defined meaning in the programming language)
- **keywords**(that have pre-defined maning in the programming language and contains specific properties)

### Vatiables in js:
- it is use to store the values(worked as a container of the data)

---
#### note:
- **declaration**(creation of the variable without assigning value)
- **initialization**(creation of the variable with its first assigned value)
---

#### var(it is use to create the functional scoped variable)
- added in the window object(object of the browser)
- function scoped
- we can declare and initialize it multiple times with the same name(gives no error).

#### let(it is use to create block scoped variable)
- can't be re-declared with the same name
- value can be ressigned multiple times with i the scope.

#### const(it is use to create constant variable who's value remain constant throughout the code)
- it must be declare and initialized at the same time
- can't be reassigned
- but can be updated

---
#### note:
**Temporal Dead Zone**  
-the time period between the creation of a variable and its initialization, during which the variable cannot be accessed.
- Attempting to access them before their declaration line will throw a Reference Error.

- **Use const by default. Use let only when you planning to change the value in future.
Avoid var — it belongs to the past.**

**Hoisting**  
-JavaScript engine prepares memory before running code, that time it moves all the declaration to the top.  
-in simple words, when variable initialized -> it divided into two parts declaration and initialization and all the declaration move to the top that we know as hoisting.
- in case of var, hoisted and set to undefined
- in case of let and const , hoisted but not set to undefined.
- so accessing them early gives ReferenceError
---

