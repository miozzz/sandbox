{
    class BaseOrc {
        constructor() {
            const me = this

        }

        static parseMessage(mssg) {
            return [mssg.data.fn, mssg.data.params, mssg.data.uid]

        }
        static dispatchMessage(fn, params) {
            const me = this
            return me[fn](params)
        }
        static uid() {
            return (BaseOrc.s4() + BaseOrc.s4()) + '-' + BaseOrc.s4() + '-' + BaseOrc.s4() + '-' + BaseOrc.s4() + '-' + (BaseOrc.s4() + BaseOrc.s4() + BaseOrc.s4());
        }

        static s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        static createMethods(response) {
            const me = this
            response.forEach((method) => {
                Object.defineProperty(me, method, {
                    enumerable: true,
                    writable: false,
                    value: function (...params) {
                        return me.post(method, params)
                    }
                })
            })
        }

        static create(url) {
            return new MainOrc(url)
        }

        static createBlobURL(url) {
            const me = this
            if (Orc.urls[url]) return Orc.initialize.call(me, Orc.urls[url])
            return sq.get(url).then((response) => {
                let blob;
                try {
                    blob = new Blob([response], {
                        type: 'application/javascript'
                    });
                } catch (e) {
                    window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
                    blob = new BlobBuilder();
                    blob.append(response);
                    blob = blob.getBlob();
                }

                Orc.urls[url] = URL.createObjectURL(blob)
                Orc.initialize.call(me, Orc.urls[url])
            })

        }

        static initialize(url) {
            const me = this
            me.self = new Worker(url);
            me.listenToWorker()
            let uid = Orc.uid()
            let mssg = {
                'fn': "__initialize__",
                'params': {},
                'uid': Orc.uid()
            }

            me.self.postMessage(mssg)


        }


    }
    BaseOrc.urls = {}

    class ThreadOrc extends BaseOrc {
        constructor(self) {
            super()
            const me = this
            me.self = self
            self.me = me
            self.orc = me
            self.onmessage = function (mssg) {
                let [fn, params, uid] = ThreadOrc.parseMessage(mssg)
                if (mssg.data.type == 'receipt') {
                    ThreadOrc.receipt.call(me, params)
                    return
                }

                let ret = ThreadOrc.dispatchMessage.call(me, fn, params)
                if (!ret) return
                if (typeof ret.then == 'function') {
                    ret.then((response) => {
                        ThreadOrc.respond.call(me, response, fn, params, uid)
                    })
                } else {
                    ThreadOrc.respond.call(me, ret, fn, params, uid)
                }

            }

        }
        __initialize__() {
            let arr = Object.keys(me)
            arr.shift()
            return arr

        }
        post(fn, ret, params = {}, uid = 'event') {
            ThreadOrc.respond.call(this, ret, fn, params, 'uid')
        }
        trigger(event, args, params = {}, uid = 'event') {
            ThreadOrc.respond.call(this, args, event, params, 'uid')
        }
        static respond(ret, fn, params, uid) {
            const me = this
            let mssg = {
                'type': 'response',
                'data': ret,
                'fn': fn,
                'params': params,
                'uid': uid
            }
            me.self.postMessage(mssg)
        }
        static receipt(params) {

        }



    }

    class MainOrc extends BaseOrc {
        constructor(url) {
            super()
            const me = this
            me.events = {}
            me.promises = {}
            me.ready = new Promise((resolve, reject) => {
                Orc.createBlobURL.call(me, url)
                me.on('__initialize__', (response) => {

                    Orc.createMethods.call(me, response)
                    resolve()
                })
            })


        }

        terminate() {
            this.self.terminate()
        }
        on(eventName, callback) {
            const me = this
            me.events[eventName] ? me.events[eventName].push(callback) : me.events[eventName] = [callback];
            return me
        }
        post(fn, params) {
            const me = this
            let uid = Orc.uid()
            let mssg = {
                'fn': fn,
                'params': params,
                'uid': uid
            }
            me.ready.then(() => {
                me.self.postMessage(mssg)
            })

            me.promises[uid] = {}
            me.promises[uid].promise = new Promise(function (resolve, reject) {
                me.promises[uid].resolve = resolve
                me.promises[uid].reject = reject
                me.promises[uid].fn = fn
                me.promises[uid].params = params

            })
            return me.promises[uid].promise

        }
        trigger(fn, data) {
            const me = this
            if (!me.events[fn]) return
            me.events[fn].forEach((f) => {
                f(data)
            });
        }
        listenToWorker() {
            const me = this

            me.self.addEventListener('message', function (mssg) {

                let [fn, params, uid] = Orc.parseMessage(mssg)
                if (mssg.data.type == 'response') {
                    me.resolveMessage(uid, mssg.data.data)
                    me.acknowledgeWorker()
                    me.trigger(fn, mssg.data.data)
                }
            })
        }
        resolveMessage(uid, data) {
            const me = this
            if (uid && me.promises[uid]) me.promises[uid].resolve(data)

        }
        acknowledgeWorker(data) {
            const me = this
            let mssg = {
                'type': 'receipt',
                'data': data,

            }
            me.self.postMessage(mssg)
        }

    }

    (self.document === undefined) ? new ThreadOrc(self): window.Orc = BaseOrc;
}