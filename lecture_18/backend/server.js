


const express = require("express")     //importing express framework using require so we remove type : module from package.json

const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json())

let movies = [];
let nextMovieId = 1;
let nextReviewId = 1;


function calculateAvgRating(movie) {
    if(!movie.reviews || movie.reviews.length === 0) return null;

    const sum = movie.reviews.reduce((acc, r) => acc+r.rating, 0);          //reduce 

    return Number((sum/movie.reviews.length).toFixed(1));        //fixed 1 round of to 1 digit

}

//Backend Health

app.get("/health", (req, res)=>{
    res.json({status:"ok", message:"Movie Rating is running"});
})

//get req get all movies
app.get("/movies", (req, res) => {
    const result = movies.map((m) => ({
        id: m.id,
        title: m.title,
        year: m.year,
        avgRating: calculateAvgRating(m),
        reviews: m.reviews.length,
    }));

    res.json(result);
})

//create a movie
app.post("/movies", (req, res) => {
    const {title,year} = req.body;
    if(!title  || !year) {
        return res.status(400).json({error:"title and year are required"});
    }

    const movie = {
        id:nextMovieId++, 
        title,
        year,
        reviews:[]
    };
    movies.push(movie);
    res.status(201).json(movie);

})

//get a single movie
app.get("/movies/:id",(req, res)=> {
    const movieId = Number(req.params.id);
    const movie = movies.find((m) => m.id === movieId);
    if(!movie) return res.status(404).json({error:"Movie Not Found"});

    const avgRating = calculateAvgRating(movie);
    res.json({...movie, avgRating});
})   //for a specific id - movie


//add a review to a moive

app.post("/movies/:id/reviews", (req, res) => {
    const movieId = Number(req.params.id);

    const {user, rating, comment} = req.body;
    
    const movie = movies.find((m) => m.id === movieId);

    if(!movie) return res.status(404).json({error:"Movie Not Found"});

    if(!user || !rating || !comment) {
        return res.status(400).json({error:"Missing required fields"});
    }

    const review = {
        id :nextReviewId++,
        user, 
        rating: Number(rating),
        comment,
        createdAt: new Date(),
    }

    if(!movie.reviews) {
        movie.reviews = []
    }

    movie.reviews.push(review);

    return res.status(201).json({message:"Review added successfully", review})

})

//get all reviews fr a movie
app.get("/movies/:id/reviews", (req, res) => {
    const movieId = Number(req.params.id);

    const movie = movies.find((m) => m.id === movieId);

    if(!movie) return res.status(404).json({error: "Movie not found"});

    res.json(movie.reviews);
})

//error handling

app.use((err, req, res, next) => {
    console.log("Unexpected err", err);
    res.status(500).json({error:"Something, went worng"})
})


//to start the server on the desired port
app.listen(PORT, () =>{
    console.log("Server is running...");
})
//to run the server locally we have localHost
 
