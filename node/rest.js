const XMLHttpRequest = require('./scripts/XMLHttpRequest.js').XMLHttpRequest;
const merge = require('./merge.js')

module.exports = rest = {
    'ajax': function (ajax) {
        var ajax0 = {
            "url": '',
            'callback': null,
            'method': 'POST',
            'data': null,
            'async': true,
        };
        ajax0 = merge(ajax0, ajax);
        if (!ajax0.url) return null;
        var promise = new Promise(
            function (resolve, reject) {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4) {
                        if (xmlhttp.status == 200) {
                            if (ajax0.callback) ajax0.callback(xmlhttp.responseText);
                            resolve(xmlhttp.responseText);
                        } else {
                            reject('CANNOT CONNECT TO SERVER');
                        }
                    }
                }
                xmlhttp.open(ajax0.method, ajax0.url, ajax0.async);
                if (ajax0.contentType) {
                    xmlhttp.setRequestHeader("Content-Type", ajax0.contentType);
                };
                xmlhttp.onerror = function () {
                    reject(Error("Network Error"));
                };
                xmlhttp.send(ajax0.data);
            }
        );
        promise.catch((err) => {return err})
        return promise;
    },
    'get': function (url, data = {}) {
        const me = this;

        let ajax0 = {
            "url": url,
            'method': 'GET'
        };

        let getAjax = rest.ajax(ajax0)
        let promise = new Promise(function (resolve, reject) {
            getAjax.then(function (response) {
                return resolve(response)
            })
            getAjax.then(function (err) {
                return reject(err)
            })
        })
        promise.catch((err)=>{return err})
    },
    post(url, data = {}) {
        const me = this;

        let ajax0 = {
            "url": url,
            'method': 'POST',
            'data': JSON.stringify(data),
            'contentType': "application/json;charset=utf-8",
        };

        let getAjax = rest.ajax(ajax0)
        let promise = new Promise(function (resolve, reject) {
            getAjax.then(function (response) {
                if (typeof response === 'string' || response instanceof String) return resolve(JSON.parse(response));
                return resolve(response);
            })
            getAjax.then(function (err) {
                return reject(err);
            })
        }).catch((err)=>{return err})
        return promise
    },
    query(url, query, options) {
        let me = this;

        if (!url) {
            url = query.connection.serviceUrl;
            delete query.connection.serviceUrl;
        }

        let ajax0 = {
            "url": url,
            "data": JSON.stringify(query),
            'contentType': "application/json; charset=utf8"
        };
        let getAjax = rest.ajax(ajax0)
        let promise = new Promise(function (resolve, reject) {
            getAjax.then(function (response) {
                let data = JSON.parse(response);
                rest.resolveReferences(data, data.data);
                resolve(data);
            })
            getAjax.then(function (err) {
                return reject(err);
            })
        })
        promise.catch((err)=>{return err})
        return promise
    },
    resolveReferences(rootData, data, keys) {
        for (var key in data) {
            if (keys != null && !keys.includes(key)) continue;
            var value = data[key];
            if (typeof value == "string" && value.startsWith("$\\")) {
                var obj = rootData.records;
                var paths = value.split("\\");
                var ctr;
                for (ctr = 1; ctr < paths.length; ctr++) { // ctr =1 (skip $)
                    obj = obj[paths[ctr]];
                }
                data[key] = obj ? obj : paths[ctr - 1]; //else not loaded??
            };
            value = data[key];
            if (typeof value == "object") {
                rest.resolveReferences(rootData, value);
            }
        }
        return;
    }
}


