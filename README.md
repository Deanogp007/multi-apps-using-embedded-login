# Overview
This example demostrates how to use multi applications with frontegg embedded login

(This example is very naive and doesn't contain security measurements that is required 
for redirect url validations)

# Whats included
The sample contains 3 applications

- The login dialog - runs on port 3000
- The first application - runs on port 3001
- The second application - runs on port 3002

# How to install
Install using npm install on the root folder.
This will run npm install for all 3 applications

# How to run
Run using npm start on the root folder.
This will open all 3 applications concurrently

# How to use
Go to one of the applications (3001 / 3002) and click on the Authenticate button.
This will open the login dialog (3000) and will authenticate the user.
After the user is authenticated, the login dialog will close and the user will be redirected to the application.

Go to the second application (3002)
You should be authenticated as well

