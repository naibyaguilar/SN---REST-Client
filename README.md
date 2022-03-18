# Quick Start
### Download the repo

```bash
git clone https://gitlab.com/safonews/sn-rest-client.git
cd SN-REST-CLIENT
```
### Set up Node.jd
#### Before you begin, make sure your development environment includes Node.js and npm. 
```bash
npm install
```
### Start the server
```bash
node server.js
```
You should be able to hit http://localhost:8080/

# Files/Folders Structure
## Here is a brief explanation of the project folder structure and some of its main files usage:


```
└── SN-REST-CLIENT             # Contains all source files.   
│   └── assets                 
│   │   └── css    
│   │   └── image    
│   └── node_modules         # You must initialize it 
│   └── pages 
│   │   └──  index.js     
│   └── server              
│   │   └── handlers             # Contains  handlers of auth, index and home
│   │   └── models                #Empty
│   │   └── routes                 # Contains  routes of auth, index and home
│   └── views           
│   │   └── auth
│   │   └── publication
│   │   └── templates           # Contains temples of head, nav and footer
│   │   └── index.ejs             # Contains  the basic home
│   └── .gitignore                 # Contains  the list of files or folders to ignore 
│   └── package-lock.json    # You must initialize it 
│   └── packege.json
│   └── Readme.md
│   └── server.js
│
 ```

 ## More information

 ## LICENSE

Copyright (C) 2022 Fuego Intenso 
