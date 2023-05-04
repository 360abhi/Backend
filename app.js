const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let posts =[];
app.get('/posts', (req,res)=>{
    // console.log(posts);
    res.status(200).json(posts);
});

app.post('/posts', (req,res)=>{
    const post = req.body;
    posts.push(post);
    res.status(201).json(post);
    console.log(posts);
});

const port = process.env.PORT || 3000 ;
app.listen(port,()=>{
    console.log(`SErver is running on ${port}`)
});

 