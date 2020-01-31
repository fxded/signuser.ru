// server.js
const   port        = process.env.PORT || 3002,
        express     = require('express'),
        MongoClient = require('mongodb').MongoClient,
        bodyParser  = require('body-parser'),
        db          = require('./config/db'),
        dbClient    = new MongoClient(db.url, { useUnifiedTopology: true });

app = express();
        
app.use(express.static(__dirname + '/public'));

dbClient.connect(err => {
    if (err) return console.log(err);
    const dbase = dbClient.db();   
    require('./app/routes')(app, dbase);
    app.listen(port, () => {
        console.log('Listen on ' + port + ' dir ' + __dirname + 
                    ' dbase: ' +  dbase.namespace);
    });
});
