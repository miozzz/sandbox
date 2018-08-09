

importScripts('scripts/server.js');
importScripts('scripts/orc.js');


orc.joinArray = function ([params]) {
    console.log('samplefunc', params)
    return params.join('')
}

orc.addArray = function ([params]) {
    let sum = 0
    params.forEach((item) => {
        sum = addNum(sum,item)
    })
    return sum
}

addNum =  function (sum,item){
    return sum + parseInt(item)
}
