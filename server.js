// This is the basic server foundation.
// We will add the API endpoint here in the next step.

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Have a Dream server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
