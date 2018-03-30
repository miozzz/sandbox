#! /usr/bin/env hy

(Server
 "HelloWorld"

 "0.0.0.0"
 8003

 ("/" "Hello World! asjdfhadjfhajdfhlakj POST to /fortune")

 ("/fortune" [POST] "You'll be happy forever!"))