const axios = require("axios") 
// const {KEY, URL} = process.env;

const URL2 = "https://rickandmortyapi.com/api"
// const URL = 'https://be-a-rym.up.railway.app/api'
// const KEY = '277f6ade46a8.202ec27b1169af7ce0ad'

const getCharDetail = (req, res)=>{
    const {id}= req.params;
    axios
    .get(`${URL2}/character/${id}`)
    .then(response =>{
        const {id, name, species, image, gender, origin} = response.data;
        res.status(200).json({id, name, species, image, gender, origin})
    })
    .catch((error)=>{
        res.status(500).json({error: error.massage });
    });
}

module.exports= getCharDetail;