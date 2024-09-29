# E-Commerce Website
<div align="center">
    <img src="Common/Image/README/README1.png" alt="Title!" height="450" width="auto"/>
</div>
GIF will show at here
Documentation | Demo

# Introduction
The project will show `Web`, `IOS`, `Android`, `Backend`, and `SQL` for demonstration.

# Framework
Web: `React`  ( `React@18.3.1 + react-router-dom@6.26.2 + Axios@1.7.7` )
IOS: `Swift`
Android: `Kotlin`
Backend: `Node.js`
SQL: `PostgreSQL` ( `Express@4.21.0 + Passportt@0.7.0` )

# Features
- Backend: API Document

## Development timeline
Web -> Android -> IOS

## Todo List
- [x] Register, Login
- [ ]

# Folder Structures
```
└── E-Commerce-Site/
    ├── Guideline_Schedule      # The schedule of this project and guideline
    ├── public      # Images, Video, Text, Translation
    │   ├── images
    │   ├── translation
    │   └── font
    ├── backend     # Node.js: (Develop Order: Model -> Controller -> Routes -> app)
    │   ├── API_Docs     # API Document
    │   ├── config       # Databse Setting
    │   ├── controllers  # SQL: similiar with SQL Store Procedure
    │   │   ├── core
    │   │   ├── event
    │   │   ├── forum
    │   │   ├── job
    │   │   └── store
    │   ├── models  # SQL: select, insert, update....
    │   │   ├── core
    │   │   ├── event
    │   │   ├── forum
    │   │   ├── job
    │   │   └── store
    │   └── routes  # Url endpoint
    │       ├── core
    │       ├── event
    │       ├── forum
    │       ├── job
    │       └── store
    ├── database    # PostgreSQL: SQL Table, Procedure, Function
    │   ├── core    # Account, ....
    │   ├── store
    │   │   ├── func
    │   │   ├── sp
    │   │   └── table
    │   ├── event
    │   │   ├── func
    │   │   ├── sp
    │   │   └── table
    │   └── job
    │       ├── func
    │       ├── sp
    │       └── table
    ├── android     # Android (Kotlin)
    ├── ios         # IOS 
    └── web         # React
        ├── public
        ├── src/
        │   ├── API
        │   ├── core                # The code can use in whole project
        │   │   ├── auth            # Account Logging
        │   │   │   ├── components  # UI element
        │   │   │   ├── containers  # Global Header, Footer, SideView....
        │   │   │   ├── hooks  
        │   │   │   ├── utils       # Calculation, String....
        │   │   │   ├── lib         # libraryL localStorage, IndexedDB
        │   │   │   └── style       # CSS    
        │   │   ├── payment
        │   │   │   ├── components  
        │   │   │   ├── containers 
        │   │   │   ├── hooks  
        │   │   │   ├── utils        
        │   │   │   └── style    
        │   │   └── view            # Global View: Login, Error404 Page....
        │   │       └── style
        │   ├── env                     # GLOBAL Parameters: CSS, config, constant, path setting
        │   │   ├── style               # GLOBAL CSS
        │   │   ├── config
        │   │   └── const
        │   ├── event
        │   │   ├── ...
        │   │   └── ...
        │   ├── forum
        │   │   ├── ...
        │   │   └── ...
        │   ├── job
        │   │   ├── ...
        │   │   └── ...        
        │   ├── store
        │   │   ├── components
        │   │   ├── containers
        │   │   ├── hooks
        │   │   ├── lib
        │   │   ├── style
        │   │   └── view   
        │   ├── plugin                  # Third Party Plugin, APP
        │   ├── routes        
        │   └── test                    # Unit Test   
        ├── App.js
        └── index.js
```






This project will keep doing optimization. 
If you think it is good or helpful to you, you are welcome to `STAR` it. 
If you have a better idea, you are also welcome to visit my Github homepage. I have a contact channel for exchanging ideas.
