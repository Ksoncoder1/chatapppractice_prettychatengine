const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) =>{
    const {username} = req.body;
    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "04928418-7b93-4861-9d02-b7d7c464d065"}}
        )
        return res.status(r.status).json(r.data);

    } catch (e){
        return res.status(r.response.status).json(r.response.data);

    }
});
app.listen(3001);