const express = require('express');

const app = express();

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
    res.send('this is working')
})

app.post('/signin', (req,res) =>{
    res.json('signing');
})

app.listen(3000, () => {
    console.log("app is running on port 3000");
})