// routes/user_routes.js

const User = require('../models/user');


module.exports = function(app) {

    // GET route for reading data
    app.get('/', function(req,res){
        res.sendfile('index.html');
        res.end();
    });

    // GET route after registering
    app.get('/profile', function (req, res, next) {
        User.findById(req.session.userId).exec(function (error, user) {
            if (error) {
                    console.log('------->session is error:', error);
            } else {
                if (user === null) {
                var err = new Error('Not authorized! Go back!');
                err.status = 400;
                console.log('------->session is ended:', err);
                res.redirect('/');
                } else {
/*                    res.send('<h1>Name: </h1>' + user.username + 
                             '<h2>Mail: </h2>' + user.email +
                             '<br><a type="button" href="/logout">Logout</a>');*/
                    //res.render('cabinet');
                    res.redirect('cabinet.html');
                }
            }
        });
    });

    // GET for logout logout
    app.get('/logout', function (req, res, next) {
        if (req.session) {
            // delete session object
            req.session.destroy(function (err) {
            if (err) {
                console.log('------->error of destroing session:', err);
            } else {
                console.log('------->session destroyed:');
                res.redirect('/');
            }
            });
        }
    });

    //POST route for updating data
    app.post('/signin', (req, res) => {
        req.on('data', function(data){
            console.log('requset: ', data.toString());
            const   userData = JSON.parse(data),
                    item = {    username    : userData.username, 
                                password    : userData.password,
                                email       : userData.email,
                                birthday    : userData.birthday,
                                sex         : userData.sex };
                    
            User.create(item, function (error, user) {
                if (error) {
                    console.log('bd_error: ', error);
                    res.send(error);
                    res.end();
                } else {
                    req.session.userId = user._id;
                    console.log('result of insert: ', user);
                    res.send(user);
                    res.end();
//                    return res.redirect('/profile');
                }
            });
        });
        req.on('end', function(){
            console.log('end of requset');
        });
    });

    //POST route for login
    app.post('/login', function(req,res){
        req.on('data', function(data){
            console.log('requset: ', data.toString());
            const   userData = JSON.parse(data);
                   
            User.authenticate(userData.email, userData.password, function (error, user) {
                if (error || !user) {
                    var err = new Error('Wrong email or password.');
                    err.status = 401;
                    console.log('------->error authenticate:', error);
                    res.writeHead(401);
                    res.end();
                } else {
                    console.log('------->finding user:', user);
                    req.session.userId = user._id;
                    res.redirect('/profile');
                }
            });
        });
        req.on('end', function(){
            console.log('end of requset');
        });
    });

    // POST route for updating userdata
    app.post('/update', (req, res) => {
        req.on('data', function(data){
            console.log('update requset: ', data.toString());
            const   userData = JSON.parse(data),
                    item = {    username    : userData.username, 
                                password    : userData.password,
                                birthday    : userData.birthday};

            if (req.session.userId) {
                User.findById(req.session.userId, (err, usr) => {
                    if (err) {
                        console.log('------->update error:', err);
                        res.send(err);
                        res.end();
                    } else {
                        console.log('------->update user:', usr);
                        usr.password = userData.password;
                        usr.username = userData.username;
                        usr.birthday = userData.birthday;
                        usr.save();
                        res.send({updatestatus:1});
                        res.end();
                    }
                });
             }
        });
        req.on('end', function(){
            console.log('end of requset');
        });
    });

    // POST route for get userdata
    app.post('/getuser', function (req, res, next) {
        console.log('-------getuser',req.session);
        if (req.session.userId) {
            User.findById(req.session.userId).exec(function (error, user) {
                if (error) {
                        console.log('------->session is error:', error);
                } else {
                    if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    console.log('------->session is ended:', err);
                    res.redirect('/');
                    } else {
                        res.send(user);
                    }
                }
            });
        }
    });

}
