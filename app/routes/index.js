// routes/index.js
const userRoutes = require('./user_routes');
module.exports = function (app) {
    userRoutes(app);
};
