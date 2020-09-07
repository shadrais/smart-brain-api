const clarifai = require('clarifai')

const app = new Clarifai.App({
    apiKey: '7e71dc7bece44af5af44b63e369c4422'
});

const handleApiCall = (req,res) =>{
    app.models
    .predict(
        Clarifai.FACE_DETECT_MODEL,
        req.body.input).then(data => {
            res.json(data);
        })
        .catch(err => res.status(400).json("unable to work with api"))
}


const handleImage = (req, res, db) => {
    const {
        id
    } = req.body;
    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries)
        })
        .catch(err => res.status(400).json("unable to get count"))
}

module.exports = {
    handleImage,
    handleApiCall
}