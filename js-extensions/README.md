# Javascript Extensions

* Some small pieces of code that should be helpful in doing a lot on the client side. 
* Some methods that should be native to javascript

## Object.isObject(item)

Checks if the item passed is an Object

## Object.merge(obj1,obj2)

Creates a new Object obj3 which is a recursive merge of obj1 and obj2. If a key in obj1 exists in obj2, the value of that key in obj2 will be used in obj3. 

### example 
``` javascript
let a = {'a':'A','b':'b','c':{'1':'one','2':'TWO'},'e':{}}
let b = {'a':'A','b':'B','c':{'1':'one','2':'two'},'d':{'3':'three'}}
let c = Object.merge(a,b)
//c = {'a':'A','b':'B','c':{'1':'one','2':'two'},'d':{'3':'three'},'e':{}}
```

## Object.compare(obj1,obj2)

Recursively compare all key and value pairs in obj1 and obj2.