# Orc.js

## Simple worker encapsulation. 
* Creates an Orc worker from a URL
* Orc class maps onmessage event to custom events
* Communication with worker is done through this class

## Creating Accesible Methods in the Worker 

* In each worker scope there is one instance of an Orc.
* All methods attached to this Orc instance will be easily accesible in the main thread.

 ``` javascript
 // sampleWorker.js
 
importScripts('scripts/server.js');
importScripts('scripts/orc.js');

//This method will be accesible in the main thread.
orc.joinArray = function ([params]) {
    return params.join('')
}

orc.sum = function([a,b]){
    return a + b
}
//This method will be NOT accesible in the main thread
doThis = function(params){
    console.log('do this')
    return
}
```

## Calling Methods from the Main Thread
* Methods in the worker thread attached to the orc can be accessible in the main thread.
* You can perform these methods as if the main thread and the worker thread are the same.

``` javascript
let orc = Orc.create('scripts/sampleWorker.js')
    orc.post('joinArray',['a','b','c']) //posts the joinArray method to the worker
    orc.joinArray(['a','b','c'])        //Short version of .post()
    orc.sum(1,2)
```

## Response Handling

### Event Style 
* Responses from the worker thread can be handled like events through .on() method
* The first parameter is the method to listen for.
* The second parameter is the callback function.
``` javascript
    orc.on('joinArray',function(data){
        console.log(data)
    })
    // Event will fire when orc.joinArray(['a','b','c']) returns from worker thread
```

### Promises
* Responses from the worker thread can be handled like promises 
* Every time a method is posted to the worker a unique promise is returned
* This unique promise is resolved when the post returns from the worker thread
``` javascript
    orc.joinArray(['a','b','c']).then((data)=>{
        console.log(data)
    })  
```

## Terminating an Orc
* In the main thread you can terminate an orc by using the terminate method
```javascript
orc.terminate()
```

## Reserved Method Names
A list of method names that cannot be attached to the orc in the worker thread
* self
* onmessage
* \_\_initialize\_\_
* post
* terminate
* on
* post
* trigger
* listenToWorker
* resolveMessage
* acknowledgeWorker
* events
* promises
* ready
