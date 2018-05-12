const express=require('express');
var router=express.Router();
var fs=require("fs");
const passport=require('passport');
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
var async = require('async');
var crypto = require('crypto');
const config=require('../config/database');
const User=require('../models/user');
//const sarees=require('./routes/sarees');


router.post('/register',function(req,res,next){
	var newUser= new User({
		name:req.body.name,
		email:req.body.email,
		username:req.body.username,
		password:req.body.password
	});

	User.addUser(newUser,function(err,user){
		if(err){
			res.json({success:false,msg:'Registration failed'});
		}
		else
		{
			res.json({success:true,msg:'Registration done..!!'});
		}
	});
});


router.post('/authenticate',function(req,res,next){
	const username=req.body.username;
	const password=req.body.password;

	User.getUserByName(username,function(err,user){
		if(err) throw err;
		if(!user){return res.json({success:false,msg:'User not found'});}
		User.comparePassword(password,user.password,function(err,isMatch){
			if(err) throw err;
			if(isMatch){
				var token= jwt.sign(user.toJSON(),config.secret,{
				expiresIn:604800//1 week
			});
				res.json({
					success:true,
					token:'Bearer '+token ,
					user:{
						id:user._id,
						name:user.name,
						username:user.username,
						password:user.password,
						type:user.type
					}
				});
			}else{
				return res.json({success:false,msg:'Wrong password'});
			}
		});
	});
});


router.post('/forgottenPassword',function(req,res,next){
	async.waterfall([

	function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
      //console.log("token",token);
  },
  function(token, done) {
      const email=req.body.email;
	User.findOne({email:email},function(err,user){
		if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('/forgot');
        }
        user.resetPasswordToken=token;
        user.resetPasswordExpires=Date.now() +3600000;
        console.log('user',user);
        user.save(function(err) {
        	done(err,token,user);
        });
        //console.log('user');

	});
    },
    function(token,user,done){
    	//console.log("inside token,user,done ",token,user);
		var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: "yashradhika37@gmail.com",
          pass: "yash1234"
        }
      });
		//console.log("req.headers.host ",req.headers.host);
      var mailOptions = {
        to: user.email,
        from: 'yashradhika37@gmail.com',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'https://' + 'guarded-fjord-37074.herokuapp.com' + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
      	//console.log('An e-mail has been sent to ',mailOptions);
        //req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        //done(err, 'done');
        //res.sendStatus(200);
        return res.json({success:true,token:mailOptions.token,msg:'An e-mail has been sent to ' + user.email + ' with further instructions.'});
      });

	 }

	]);

});



router.get('/profile',passport.authenticate('jwt-bearer',{session: false}),function(req,res,next){
	console.log('in users profile route');
	res.json({user:req.user});
});

//var paypal = require('paypal-rest-sdk');



module.exports=router;