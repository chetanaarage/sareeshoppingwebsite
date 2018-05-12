const mongoose=require('mongoose');
//const bcrypt=require('bcryptjs');
const config=require('../config/database');


// var imageSchema = mongoose.Schema({
// image: { data: Buffer, contentType: String }
// });

var sareeSchema=mongoose.Schema({
	name:{type:String,required:true},
	description: {type:String,required:true},
	category:{type:String,require:true},
	//image:[imageSchema],
	image:{type:String,require:true},
	price:{type:String,required:true}
})

const Saree=module.exports=mongoose.model('Saree',sareeSchema);
//const Image=module.exports=mongoose.model('Image',imageSchema);

//const Cart=module.exports=mongoose.model('Book',cartSchema);

// module.exports.findById=function(id,callback){
// 	Product.findById(id,callback);
// }
module.exports.getSarees=function(callback){
	Saree.find({},callback);
}

module.exports.addSaree=function(newSaree,callback){
	newSaree.save(callback);
}

