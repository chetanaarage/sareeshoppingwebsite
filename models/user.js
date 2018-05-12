const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');

var UserSchema=mongoose.Schema({
	name:{type:String},
	email: {type:String,required:true},
	username:{type:String,required:true},
	password:{type:String,required:true},
	type:{tye:String},
	resetPasswordToken:String,
	resetPasswordExpires:Number
})

const User=module.exports=mongoose.model('User',UserSchema);

module.exports.getuserById=function(id,callback){
	User.findById(id,callback);
}

module.exports.getUserByName=function(username,callback){
	const query={username:username};
	User.findOne(query,callback);
}

module.exports.addUser=function(newUser,callback){
	bcrypt.genSalt(10,function(err,salt){
		bcrypt.hash(newUser.password,salt,function(err,hash){
			if(err) throw err;
			newUser.password=hash;
			newUser.save(callback);
		});
	});
}

module.exports.comparePassword=function(userPassword,hash,callback){
	bcrypt.compare(userPassword,hash,function(err,isMatch){
		if(err) throw err;
		callback(null,isMatch);
	})
}
