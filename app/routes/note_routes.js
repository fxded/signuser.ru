// routes/note_routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    app.post ('/', function(req,res){
        req.on('data', function(data){
            console.log('requset: ', data.toString());
            res.send(data);
        });
        req.on('end', function(){
            console.log('end of requset');
            res.end();
        });
    });

    app.get('/', function(req,res){
        res.sendfile('index.html');
        res.end();
    });

    app.get ('/notes/:id', (req, res) => {
        const   id      = req.params.id,
                details = { '_id': new ObjectID(id) };

        console.log('______get: ', details);
        db.collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send('bd_error: ',err);
            } else {
                console.log('result of get item: ',item);
                res.send(item);
                res.end();
            } 
        });
  });
 /*   
    app.get ('/notes/:id', (req, res) => {
        console.log(req);
        req.on('data', (data) => {
            console.log('req: ',data);
            const   id      = data.id,
                    details = { '_id': new ObjectID(id) };
            //console.log(req);
            db.collection('notes').findOne(details, (err, item) => {
                if (err) {
                    console.log('bd_error: ', err);
                } else {
                    console.log('result of find: ', item);
                    res.send(item);
                    res.end();
                }
            });    
        });
        req.on('end', function(){
            console.log('end of requset');
        });

    });
*/

    app.post('/notes', (req, res) => {
        req.on('data', function(data){
            console.log('requset: ', data.toString());
            const   dataToNote = JSON.parse(data),
                    note = { text: dataToNote.nBody, title: dataToNote.nTitle };
                    
            db.collection('notes').insertOne(note, (err, result) => {
                if (err) {
                    console.log('bd_error: ', err);
                } else {
                    console.log('result of insert: ', result.ops[0]);
                    res.send(result.ops[0]);
                    res.end();
                }
            });
        });
        req.on('end', function(){
            console.log('end of requset');
        });
    });

    app.delete ('/notes/:id', (req, res) => {
        const   id      = req.params.id,
                details = { '_id': new ObjectID(id) };

        console.log('______delete: ', details);
        db.collection('notes').deleteOne(details, (err, item) => {
            if (err) {
                res.send('bd_error: ',err);
            } else {
                console.log('note ' + id + ' is deleted');
                res.send({ "delete" : 'note ' + id + ' is deleted'});
                res.end();
            } 
        });
  });

    app.put ('/notes/:id', (req,res) => {
        req.on('data', function(data){
            console.log('requset: ', data.toString());
            const   id      = req.params.id,
                    details = { '_id': new ObjectID(id) },
                    dataToNote = JSON.parse(data),
                    note = { text: dataToNote.nBody, title: dataToNote.nTitle };
                    
            db.collection('notes').replaceOne(details, note, (err, result) => {
                if (err) {
                    console.log('bd_error: ', err);
                } else {
                    console.log('result of insert: ', result.ops[0]);
                    res.send(result.ops[0]);
                    res.end();
                }
            });
        });
        req.on('end', function(){
            console.log('end of requset');
        });

    });

    app.get ('/notes/all/find', (req, res) => {
        db.collection('notes').find().toArray((err, item) => {
            if (err) {
                res.send('bd_error: ',err);
            } else {
                console.log('result of get all item: ',item);
                res.send(item);
                res.end();
            } 
        });
    });

};
