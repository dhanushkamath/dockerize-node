# Dockerize-Node
A simple RESTful dockerized Node + MongoDB app for adding and retrieving books.

## Getting Started (with Docker)
If you have Docker installed in your computer, you do not need to have Node.js or MongoDB installed. You can run the application with a single command:
  ```bash
  $ docker-compose up
  ```
## Getting Started (without Docker)
Without Docker, you need to install Node.js, NPM and MongoDB. </br>
To install Node.js and NPM, refer to the documentation provided [here](https://nodejs.org/en/download/package-manager).</br>
To install MongoDB, refer to the documentation provided [here](https://docs.mongodb.com/manual/installation/).
### Step 1 - Start MongoDB
To start MongoDB:
- Windows:
    ```bash
    $ "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"
    ```
- Mac:
    ```bash
    $ mongod --config /usr/local/etc/mongod.conf
    ```
- Ubuntu: Please refer to the documentation provided at the [link](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/).

NOTE: Database and collection is automatically created with the first `POST` request to `/api/books`. No MongoDB configuration is required after installation - keeping MongoDB running is sufficient.
   
### Step 2 - Start the node server
To get the Node server running locally:
- `npm install` to install all required dependencies from package.json:
    ```bash
    $ npm install
    ```
- `npm run start` to start the local server:
    ```bash
    $ npm run start
    ```
- `npm run dev` to start the local server in development mode:
    ```bash
    $ npm run dev
    ```
## Code Overview
### Dependencies
- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests.
- [mongoose](https://www.npmjs.com/package/mongoose) - MongoDB object modeling tool designed to work in an asynchronous environment.
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js.

### Development Dependencies
- [nodemon](https://github.com/remy/nodemon) - The development server that automatically restarts the node application when file changes in the directory are detected.

### Application Structure

- `index.js` - The entry point to our application. This file defines the express server, integrates all the routes, initializes the logger and the mongoDB connection. 
- `src/controller/` - This folder contains the controllers for the app to read and write data to MongoDB.
- `src/routes/` - This folder contains the route definitions for the app.
- `src/models/` - This folder contains the Mongoose Schema definition for the 'books' resource.
- `test/` - This folder contains the POSTMAN collection with all requests configured.

## API
## Add a new book
----
  Returns json containing newly added data.

* **URL**

  /api/books

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Query Params**

  None
  
 * **Data Params**
   
    **Required:**
    * `title: [string]`
    * `author: [string]`

* **Success Response:**

  * **Code:** 201 CREATED<br/>
    **Content:** `{
"id": "abcdefg1234,
"title": "Dockerizing your personal projects",
"author": "Dhanush Kamath"
}`


## Get all books
----
  Returns json data containing details of all books.

* **URL**

  /api/books

* **Method:**

  `GET`
  
*  **URL Params**
   
   None
    
*  **Query Params**
   
   None
    
 * **Data Params**
   
    None

* **Success Response:**

  * **Code:** 200<br/>
    **Content:** `{
    "books": [
        {
            "title": "Dockerize your personal projects!",
            "author": "Dhanush Kamath",
            "createdAt": "2020-12-24T20:59:42.516Z"
        },
        {
            "title": "Burgers and Cars: An Autobiography",
            "author": "Dhanush Kamath",
            "createdAt": "2020-12-24T21:04:27.111Z"
        }
    ]
}`
 

## Authors
* **Dhanush Kamath** - [dhanushkamath](https://github.com/dhanushkamath)
