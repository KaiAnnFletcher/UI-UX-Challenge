const express = require("express");
const cors = require('cors');
bodyParser = require('body-parser');

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Add routes, only for view since no backend routing required
app.use(routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
  

//Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});