const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000; // Portul 3000 setat aici

app.use(express.static('public')); // Servește fișiere statice din directorul 'public'
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Eroare la citirea fișierului de utilizatori.');
    }

    const users = JSON.parse(data);
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      res.status(200).send({ message: 'Logare reușită!' });
    } else {
      res.status(401).send('Utilizator sau parolă incorecte.');
    }
  });
});

const PORT = process.env.PORT || port; // Portul 3000 folosit aici
app.listen(PORT, () => {
  console.log(`Serverul ascultă pe portul ${PORT}`);
});
