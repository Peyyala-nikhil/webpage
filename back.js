const express = require('express');
const app = express();
app.use(express.json());

let glossary = [
  { term: 'Frontend', definition: 'User-facing part of the website.' },
  { term: 'Backend', definition: 'Server-side logic and database.' }
];

app.get('/api/terms', (req, res) => res.json(glossary));
app.post('/api/terms', (req, res) => {
  glossary.push(req.body);
  res.status(201).send();
});

app.listen(3000, () => console.log('Server running on port 3000'));
