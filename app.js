const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');
const shortid = require('shortid');
const nodemailer = require('nodemailer');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const client = redis.createClient();
client.on('err', (err) => {
    console.log(err);
})

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "autobots.test.user@gmail.com",
        pass: process.env.PASS
    }
});


app.get('/:id', async (req, res) => {
    const id = req.params.id
    console.log('ID:', id);
    client.get(id, (err, object) => {
        if (err) throw err;
        console.log('BEFORE PARSE OBJECT : ', object)
        res.status(200).json(object)
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

app.post('/welcome/sendmail', async (req, res) => {
    console.log('env var:', process.env.PASS)
    data = req.body.message
    console.log('req.body', data)
    const mailOptions = {
        from: 'autobots.test.user@gmail.com',
        to: 'mohammad.zaman@carrier.com',
        subject: 'Welcome package updated notification',
        text: data
    }

transporter.sendMail(mailOptions, (error, response) => {
        if (error) throw error;
        console.log(response);
        res.send(response);
        res.redirect('/');
    })
})

app.listen(8000, () => {
    console.log('NODE SERVER STARTED')
    console.log('PASS: ', process.env.PASS)
});