var usersController = require('../controllers/users');
var authController = require('../controllers/auth');

module.exports = function(app) {
    app.get('/get', usersController.addUser);

    app.post('/api/authenticate', authController.authenticate);

    app.use(authController.verifyToken);

    app.get('/api', usersController.getInfo);
    app.get('/api/users', usersController.getUsers);
}
