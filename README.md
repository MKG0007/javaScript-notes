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

# promise:-
in simple words , as we know that js is single threaded language and due to brower features it behaves like a asynchrous manner
so, in most of the task can't be exicuted right after the reaquest because of that we use promise to assure the completion of the task.

