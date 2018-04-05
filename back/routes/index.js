var express = require('express');
var router = express.Router();
var fileUpload = require('express-fileupload');
var mongoose= require('mongoose');
var options = { server: { socketOptions: {connectTimeoutMS: 5000 } }};
mongoose.connect('mongodb://christophe:christopheg@ds161148.mlab.com:61148/friendsapp',
    options,
    function(err) {
     console.log(err);
    }
);

var data = {
  region: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.000922,
    longitudeDelta: 0.000421,
  },
  markers: [{
    latlng: {
      latitude: 34.78825,
      longitude: -122.4324,
    },
    title: "Hello",
    description: "C'est sympa ici"
  },{
    latlng: {
      latitude: 35.78825,
      longitude: -122.4324,
    },
    title: "Hello",
    description: "C'est sympa ici"
  }]
}

var userSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    password: String
});

var UserModel = mongoose.model('users', userSchema);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'FriendsApp' });
});

router.get('/friends', function (req, res, next) {
  res.json(data);
});


router.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  var picture = req.files.picture;

  // Use the mv() method to place the file somewhere on your server
  picture.mv('./public/images/picture.jpg', function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

router.get('/signin', function(req, res, next) {
  UserModel.find(
    { email: req.query.email, password: req.query.password },
    function (err, users) {
      if(users.length > 0) {
        res.json({ result: true, firstName: users[0].firstName , lastName: users[0].lastName, email: users[0].email });
      } else {
        res.json({ result: false });
      }
    }
  )
});

router.post('/signup', function(req, res, next) {
    var newUser = new UserModel ({
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    email: req.body.email,
    password: req.body.password
  });
  newUser.save(
    function (error, user) {
      res.json({ result: true });
    }
);
});

module.exports = router;
