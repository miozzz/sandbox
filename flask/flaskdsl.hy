#! /usr/bin/env hy

(defmacro Server (message host port method0 method1)
    (import flask)
    (setv app (flask.Flask message))
  
    #@((.route app (get (list method0) 0))
        (defn hello [] (get (list method0) 1)))

    #@((.route app (get (list method1) 0) :methods (get (list method1) 1) )
    (defn fortune []
     (get (list method1) 2) ))
    (.run app
      :host host
      :port (int port))
)







