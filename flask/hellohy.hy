#! /usr/bin/env hy
(import flask)

(setv app (flask.Flask "HelloWorld"))

#@((.route app "/")
   (defn hello []
     "Hello World! Please POST to /fortune"))

#@((.route app "/fortune" :methods [ "POST" ])
   (defn fortune []
     "You'll be happy forever!"))

(.run app
      :host "0.0.0.0"
      :port (int 8003))