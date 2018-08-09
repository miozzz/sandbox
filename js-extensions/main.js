Object.isObject = function(item) {
    return (item.constructor.name == "Object")
}

Object.merge = function(target, source) {
    let output = Object.assign({}, target);
    if (Object.isObject(target) && Object.isObject(source)) {
        Object.keys(source).forEach(key => {
            if (Object.isObject(source[key])) {
                if (!(key in target))
                    Object.assign(output, {
                        [key]: source[key]
                    });
                else
                    output[key] = Object.merge(target[key], source[key]);
            } else {
                Object.assign(output, {
                    [key]: source[key]
                });
            }
        });
    }
    return output;
}

Object.compare = function (obj1, obj2) {
    if (!Object.isObject(obj2)) return (obj1 == obj2)
    if (!Object.isObject(obj1)) return false
    let ks2 = Object.keys(obj2) 
    if(!ks2.length && !Object.keys(obj1).length) return true
    let stack = []
    ks2.forEach((k) => {
        stack.push(Object.compareObjects(obj1[k], obj2[k]))
    })
    return stack.every((a)=>{return a})
}
