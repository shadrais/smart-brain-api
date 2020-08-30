const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const database = {
    user:[
        {
            id:'123',
            name:'john',
            email:'john@gmail.com',
            password:'1234',
            entries:0,
            joined: new Date()
        },
        {
            id:'124',
            name:'shad',
            email:'shad@gmail.com',
            password:'5678',
            entries:0,
            joined: new Date()
        }
    ]
}

app.get('/' , (req, res) => {
    res.send(database.user);
})

app.post('/signin', (req,res) =>{
    if(req.body.email===database.user[0].email && req.body.password===database.user[0].password)
    {
        res.json('success');
    }
    else 
    {
        res.status(400).json('fail');
    }
})

app.post('/register',(req,res)=>{
    const {name,email,password} = req.body;
    database.user.push({
        id:'125',
        name: name,
        email: email,
        password:password,
        entries:0,
        joined: new Date()
    })
    res.json(database.user[database.user.length-1]);
})

app.get('/profile/:id',(req,res)=>{
    const {id} = req.params;
    let found = false;
    database.user.forEach(user => {
        if(user.id===id) {
            found = true;
            return res.json(user);
        }
    })
    if(!found){
        res.status(400).json('user not found');
    }
})

app.put('/image',(req,res)=>{
    const {id} = req.body;
    let found = false;
    database.user.forEach(user => {
        if(user.id===id) {
            found = true;
            user.entries++;
            return res.json(user.entries);
        }
    })
    if(!found){
        res.status(400).json('user not found');
    }
})

app.listen(3000, () => {
    console.log("app is running on port 3000");
})