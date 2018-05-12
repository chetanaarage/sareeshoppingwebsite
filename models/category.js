const mongoose=require('mongoose');
//const bcrypt=require('bcryptjs');
const config=require('../config/database');

var CategorySchema=mongoose.Schema({
	name:{type:String,required:true}
})

var Category=module.exports=mongoose.model('Category',CategorySchema);

module.exports.getCategories=function(callback){
		Category.find({},callback);
}

module.exports.addnewCategory=function(newCategory,callback){
	newCategory.save(callback);
}