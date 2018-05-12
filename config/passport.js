
var JwtBearerStrategy = require('passport-http-jwt-bearer');
const User=require('../models/user');
const config=require('../config/database');

module.exports=function(passport){

passport.use(new JwtBearerStrategy(
   config.secret,
   function(token, done) {
   	console.log('token',token);
     User.getuserById({_id:token._doc._id},function(err,user){
			if(err){
				return done(err,false);
			}
			if(user){
				return done(null,user);
			}else{
				return done(null,false);
			}
		});
   }
 ));
}


 