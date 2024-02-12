# Earnest_Fintech Task


Build a Restful CRUD API for a simple Note-Taking application using Node.js, Express and MongoDB.

## Steps to Setup

1. Install dependencies

```bash
npm install
```

2. Run Server

```bash
node app.js
```

You can browse the apis at <http://localhost:4000>

We will build Rest Apis that can create, retrieve, update, delete and find Tutorials by title.

The following table shows overview of the Rest APIs that will be exported:

- GET     `api/tutorials`	            get all Tutorials
- GET     `api/tutorials/:id`         get Tutorial by id
- POST    `api/tutorials`             add new Tutorial
- PUT     `api/tutorials/:id`         update Tutorial by id
- DELETE  `api/tutorials/:id`         remove Tutorial by id
- DELETE  `api/tutorials`             remove all Tutorials
- GET     `api/tutorials/published`   find all published Tutorials
- GET     `api/tutorials?title=[kw]`  find all Tutorials which title contains 'kw'

  #OUTPUT

  

https://github.com/vishalmaurya73/task/assets/121404442/c1c9fc9c-f018-4a4b-a577-3e8a00d0eefc



  

This project utilizes Node.js and Express.js to create a backend server for handling CRUD (Create, Read, Update, Delete) operations. MongoDB serves as the database for storing and managing data. Through npm packages, dependencies are easily managed. The frontend, developed using HTML and CSS, communicates with the backend via HTTP requests, enabling users to perform CRUD actions on the data stored in MongoDB. Node.js and Express.js streamline routing and request handling, while MongoDB offers flexibility in data storage. The project showcases the integration of these technologies to build a full-stack web application for efficient data management.
