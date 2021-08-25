const router = require('express').Router();
const { user_setting } = require('./user.route');
// const { category } = require('./category.route')


router.use('/org', user_setting);
// router.use('/cat', category)

module.exports = router;