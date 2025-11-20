import express from 'express' 
import cors from 'cors' 

//this is the actual server
const app = express()           //it is a express framework app

app.use(cors)       ///ui will send request to backend

app.use(express.json());        //converts the request from the frontend and the response backend in JSON form

//End points ->
//This is how we can create end points / General convention.
app.use("/api/vi/movies", movies);

//movies will be the function 