const router = require("express").Router();
const { body, validationResult } = require('express-validator');
module.exports = (app) => {
    const users = require('../controllers/users.controller');

    // Create new Collection
    app.post('/api/v1/userReg', users.createUsers);

    // Get users
    app.post('/api/v1/getUser', users.getUsers);

}
module.exports.user_setting = router;