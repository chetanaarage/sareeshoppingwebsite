const express=require('express');
const path=require('path');
const fs=require('fs');
const bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var session=require('express-session');
const cors=require('cors');
const mongoose=require('mongoose');
const passport=require('passport');
const nodemailer=require('nodemailer');
const config=require('./config/database');
const MongoStore=require('connect-mongo')(session);
const flash=require('express-flash');
var async = require('async');
var crypto = require('crypto');
const bcrypt=require('bcryptjs');
var grid = require("gridfs-stream");
var formidable = require("formidable");
var multipart = require('connect-multiparty');
//var multipartMiddleware = multipart();
require('./routes/paypal');
var multer = require('multer');
 //var upload = multer({ dest: './uploads' });

var app=express();
var port=process.env.PORT || 3000;

const users=require('./routes/users');
const sarees=require('./routes/sarees');
const cart=require('./routes/cart');
const paypal=require('./routes/paypal');

const User=require('./models/user');




mongoose.connect(config.database);

//
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error...'));
db.once('open',function callback(){
	console.log("Connected to DB...");

});
//cors middleware
app.use(cors());
app.use(flash());


// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
 
//passport middleware
app.use(cookieParser());
app.use(session({
	secret:'login page',
	resave:false,
	saveUnintialized:false,
	store:new MongoStore({mongooseConnection:db}),
	cookie:{maxAge:180*60*1000}
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var storage = multer.diskStorage({
  // destino del fichero
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  // renombrar fichero
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });
// var uploading = multer({
//   dest: __dirname + '../public/uploads/',
// })
//set static folder
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'uploads')))

require('./config/passport')(passport);

app.use(function(req,res,next){
	res.locals.login=req.loggedIn;
	res.locals.session=req.session;
	next();
});

app.use('/users',users);
app.use('/sarees',sarees);
app.use('/cart',cart);
app.use('/paypal',paypal);



app.get('/',function(req,res){
	res.send('hello world..!!!');
});

// app.get('/uploads/*', function (req, res) {
//     res.sendfile(path.resolve('./uploads/image.png'));
// }); 

app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
  console.log('files', req.files);
  res.send(req.files);
});

app.listen(port,function(req,res){
	console.log('Server listening on port..'+port);
});


app.get('/reset/:token', function(req, res) {
	//console.log("req.params.token",req.params.token)
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {

      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.json({success:false});
    }
     console.log("user in reset:token",user);
    // return res.json({success:true,user});
    //res.send("reset");
    // res.render('reset/${user.resetPasswordToken}', {
    //   user: req.user
    // });

  });
});

// app.post('/Upload', function (req, res) {
//     var form = new formidable.IncomingForm();
//     form.uploadDir = __dirname+"/Uploads";
//     form.keepExtensions = true;
//     form.parse(req, function (err, fields, files) {
//         if (!err) {
//             console.log('Files Uploaded: ' + files.file)
//             grid.mongo = mongoose.mongo;
//             var gfs = grid(conn.db);
//             var writestream = gfs.createWriteStream({
//                 filename: files.file.name
//             });
//             fs.createReadStream(files.file.path).pipe(writestream);
//         }
//     });
//     form.on('end', function () {
//         res.send('Completed ... go check fs.files & fs.chunks in mongodb');
//     });
// });

app.post('/reset/:token',function(req,res,next){

	console.log("req.params.token",req.params.token);
	async.waterfall([

	function(done) {
      
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          return res.json({success:false,msg:'User not found'});
        }

        bcrypt.genSalt(10,function(err,salt){
		bcrypt.hash(req.body.password,salt,function(err,hash){
			if(err) throw err;
			user.password=hash;
			user.save(function(err){
        if (err) throw err;
      });

			});
		});

        //user.password = User.addUser(req.body.password);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        

        user.save(function(err) {
          //req.logIn(user, function(err) {
          	console.log("user in post resetPasswordToken",user);
            done(err, user);
          //});
        });
        //console.log("user",user);
      });
  },
  function(user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: "yashradhika37@gmail.com",
          pass: "yash1234"
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'yashradhika37@gmail.com',
        subject: 'Your Password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        return res.json({success:true,msg:'Success! Your password has been changed.'});
      });

    }

	]);

});

