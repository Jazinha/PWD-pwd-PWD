const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('client/public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
  });
  