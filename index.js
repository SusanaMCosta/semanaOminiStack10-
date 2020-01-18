const express = require('express');

const app = express();

app.get(express.json());

app.get('/', (request, response) => {
    console.log(request.query);
    return response.json({message: "Hello"});
});

app.listen(3333);

//MongoDB não relacional