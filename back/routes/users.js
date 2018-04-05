var express = require('express');
var router = express.Router();

// var UserModel = mongoose.model('users', userSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/signin', function(req, res, next) {
//   UserModel.find(
//     { email: req.query.email, password: req.query.password },
//     function (err, users) {
//       if(users.length > 0) {
//         res.json({ result: true, firstName: users[0].firstName , lastName: users[0].lastName, email: users[0].email });
//       } else {
//         res.json({ result: false });
//       }
//     }
//   )
// });
//
//
// router.post('/signup', function(req, res, next) {
//     var newUser = new UserModel ({
//     lastName: req.body.lastName,
//     firstName: req.body.firstName,
//     email: req.body.email,
//     password: req.body.password
//   });
//   newUser.save(
//     function (error, user) {
//       res.send('signup ok');
//
//     }
// );
// });

module.exports = router;
