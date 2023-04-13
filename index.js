const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/math', async (req, res) => {
    const {number} = req.query;

    const options = {
        method: 'GET',
        url: `https://numbersapi.p.rapidapi.com/${number}/math?json=true`,
        headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
})

const PORT = 8000;
app.listen(8000, () => {
    console.log(`Server is running on ${PORT}`);
});