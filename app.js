
const express = require('express');
const redis = require('redis')
const bodyParser = require('body-parser');
const shortid = require('shortid')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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
        person = JSON.parse(object)
        console.log('AFTER PARSE OBJECT : ', person)
        const _perosn = JSON.stringify(person)
        res.status(200).json(person)
    })
})

app.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { firstName, lastName } = req.body
    const person = { firstName, lastName }
    client.set(id, JSON.stringify(person))
    res.status(200).end();
});

app.post('/', async (req, res) => {
    const { firstName, lastName } = req.body;
    const person = { firstName, lastName }
    id = shortid.generate()
    client.set(id, JSON.stringify(person));
    res.status(201).json({"id": id});
})

app.delete('/:id', async (req, res) => {
    id = req.params.id;
    console.log(`Delete object for ID:', ${id}`);
    client.del(id);
    res.status(204).json({'msg': `delete ${id}`}).end();
})

app.listen(8000, () => {
    console.log('NODE SERVER STARTED')
});


