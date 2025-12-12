const express = require("express")

const app = express();

const PORT = 3000;

app.use(express.json());

let tasks = [];

let nextId = 1;

// get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
})

//get a particular task
app.get("/tasks/:id", (req, res) => {

    const task = tasks.find(t=>t.id == req.params.id);

    if(!task) {
        return res.status(404).json({error:"Enter valid task"});
    }

    res.json(task);
});


//post -> create task
app.put("/tasks/:id", (req, res) => {
    
    const t = {
        id : nextId++,
        text : req.body.text
    }
    tasks.push(t);
    res.json(t);
});


//put method -> replaces entire resources
//request body -> payload

app.put("/task/id", (req, res) => {
    const index = tasks.findIndex(t=>t.id == req.params.id);             //find the request parameter's id

    //Check wheter it is -1 if -1 then throw error
    if(index == -1) {
        return res.status(404).json({error:"Not Found"})
    }

    //replace the current idx with the user requirement
    tasks[index] = {id:Number(req.params.id), title:req.body}
})



//Patch -> updates only partial things
//Can modify specific data.
app.patch("/tasks/:id", (req, res) => {
    const task = tasks.find(t=>t.id == req.params.id);

    if(!task) return res.status(404).json({error:"Not Found"});

    if(req.body.title !== undefined) task.title=req.body.title;
    res.json(task);
    
})


//Delete Particular ID
app.patch("/tasks/:id", (req, res) => {
    tasks = tasks.filter(t=>t.id == req.params.id);
    res.json({message:"Deleted"});
})


app.listen(PORT, () => {
    console.log("Server is running...");
})
