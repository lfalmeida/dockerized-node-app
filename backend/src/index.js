const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello from the API Container!'
  });
});

app.listen(8080);

