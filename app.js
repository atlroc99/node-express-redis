const express = require('express');
const redis = require('redis')
const bodyParser = require('body-parser');
const shortid = require('shortid')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const client = redis.createClient()
client.on('err', (err) => {
    console.log(err);
})


app.get('/:id', async (req, res) => {
    const id = req.params.id
    console.log('ID:', id);

    client.get(id, (err, object) => {
        if (err) throw err;
        console.log('BEFORE PARSE OBJECT : ', object)
        res.status(200).json(object)
        // parse_object = JSON.parse(object)
        // console.log('AFTER PARSE OBJECT : ', parse_object)
        // const stringify_object = JSON.stringify(parse_object)
    })
})

app.put('/:id', (req, res) => {
    console.log('updating data | customerID:', req.params.id);
    const data = req.body
    const id = req.params.id === 'NIL' ? shortid.generate() : req.params.id;
    client.set(id, JSON.stringify(data))
    res.status(201).json({ 'id': id }).end();
});

app.post('/:id', (req, res) => {
    const data = req.body;
    const id = req.params.id
    console.log(`ID: ${id} & GOT BODY!! ${data}`,)
    client.set(id, JSON.stringify(data));
    res.status(201).json({ "id": id }).end();
})

app.delete('/:id', async (req, res) => {
    id = req.params.id;
    console.log(`Delete object for ID:', ${id}`);
    client.del(id);
    res.status(204).json({ 'msg': `delete ${id}` }).end();
})

app.listen(8000, () => {
    console.log('NODE SERVER STARTED')
});


