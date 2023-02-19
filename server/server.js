const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = require("./src/app");

// Conver incoming data to JSON format
app.use(bodyParser.json());

// Enabled CORS
app.use(cors());

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

module.exports = app;