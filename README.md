## MintableLite
Cafe Portal is a web application where it has 2 pages. Cafes and Employees. Every Cafe has name, description, location attributes.  The app have two pages, a landing page for listing already created Cafes and Employees fetched from endpoints and a details page for viewing full details of an employee which comes from another API endpoint.


This project is mainly created by using [React.js](https://reactjs.org/) project bootstrapped with [`create-react-app`](https://github.com/facebook/create-react-app), [Antd](https://ant.design/) for frontend development and [Docker](https://docs.docker.com/),[DockerCompose,] [Node.js] , [Express] for backend and API development


## System Requirements
For run this application, system needs to support following versions
"react": "^18.2.0",


## Getting Started

First, run the development server :

```bash
npm run start
# or
yarn dev
```

## List all Employees
![alt text](https://github.com/rahunanthanan/Cafe-Portal/blob/main/client/Screenshots/EmployeesPage.png)



## Storage

Used NOSQL Database - MongoDB  for storage


## Endpoints 
The app have three endpoints to list all created cafes, create a cafe and employees and get details of an employee.

To create endpoints, express was used with docker, docker compose

List API : GET
    
Create API : POST
    
   Parameters :   _id, name, description, location, 

Details API - GET
    
    Request Parameters : id



## TO DO


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.



## Learn More



